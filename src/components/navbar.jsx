import React, { useState, useEffect } from 'react';
import {Redirect, NavLink, Link, Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './home'
import ShoppingCart from './shopping-cart'
import { Nav, NavDropdown, Navbar} from 'react-bootstrap'
import AdminOrders from './admin/admin-orders'
import AdminProducts from './admin/admin-products'
import MyOrders from './my-orders';
import Login from './login'
import loginData from '../Data/loginData.json'
import Logout from './logout';
import Container from './container';
import ProductForm from './admin/products-form';


const NavBarRx = (props) => {

    const [state, setState] = useState({
        password: "",
        username: "",
        isLogged: false,
        isAdmin: false,
        errors:{
          username: "", password: ""
        }
      })

    useEffect(() => {
    let logged = localStorage.getItem('user');
    if(logged){
    const loggeduser = JSON.parse(logged);
        setState({...state, loggeduser})
    }

    }, [])
    const handleChange = (event) => {
        const {name, value} = event.target;
        let errors = {...state.errors}
        switch (name) {
            case 'username':
            errors.username = value.length > 5 ? 
            '' : 'username must be at least five chars'
            break;
            case 'password':
            errors.password = value.length > 5 ? 
            '' : 'password must be at least five chars'
            default:
            break;
        }
        setState({...state, errors, [name]: value});
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const {username, password} = {...state};
        const user = loginData.filter(x => x.username === username && x.password === password)[0];
        if (user) {
            state.isLogged = true;
            state.isAdmin = user.isAdmin
            setState({...state, user})
            //logstate = {...state}
            localStorage.setItem('user', JSON.stringify(user))
            return <Redirect to='/home' />
            //history.push("/home");
        }
    }
    

    return(
        <BrowserRouter>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/">O</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/shopping-cart">Shopping Cart</Nav.Link>
            {!state.isLogged && <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>}
            {state.isLogged && <NavDropdown title={state.username} id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/my-orders">My Orders</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/admin/admin-orders">Manage Orders</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/admin/admin-products">Manage Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <Logout />
                {/* </Logout> */}
                {/* <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item> */}
            </NavDropdown>}
            </Nav>                
        </Navbar.Collapse>
        </Navbar>
            {/* {my} */}
        <Switch>
        <Route exact path="/" />
        <Route path="/home" component={Home} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/login" render={() => <Login submitForm={handleSubmit} 
        changeForm={handleChange} user={state}/>} />
        <Route exact path="/admin/admin-orders" component={AdminOrders} />
        <Route exact path="/admin/products-form" render={() => <ProductForm user={state} />}/>
        <Route exact path="/admin/admin-products" render={() => <AdminProducts user={state} />} />
        <Route exact path="/my-orders" component={MyOrders} />
        <Route exact render={() => <Redirect to={{pathname: "/container"}} />} component={Container}/>
        </Switch>
        
        </BrowserRouter>
    )
}

export default NavBarRx