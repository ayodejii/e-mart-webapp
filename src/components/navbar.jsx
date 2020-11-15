import React, { Component } from 'react';
import {Redirect, NavLink, Link, Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './home'
import ShoppingCart from './shopping-cart'
import { Nav, NavDropdown, Navbar} from 'react-bootstrap'
import AdminOrders from './admin/admin-orders'
import AdminProducts from './admin/admin-products'
import MyOrders from './my-orders';
import Login from './login'

class NavBarRx extends Component {

    render()
    {
        //const {handleChange} = this.props;

        const isFormValid = (event) => {
            debugger
            console.log(event)
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
                {!this.props.userState.isLogged && <Nav.Link as={NavLink} to="/login">Login</Nav.Link>}
                <NavDropdown title={this.props.userState.isLogged ? this.props.userState.username : "Username"} id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/my-orders">My Orders</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/admin/admin-orders">Manage Orders</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/admin/admin-products">Manage Products</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>                
            </Navbar.Collapse>
            </Navbar>
            {/* {this.my} */}
    <Switch>
    <Route exact path="/" />
    <Route path="/home" component={Home} />
    <Route path="/shopping-cart" component={ShoppingCart} />
    <Route path="/login" render={() => <Login submitForm={this.props.handleSubmit} 
    changeForm={this.props.handleChange} user={this.props.userState}/>} />
    <Route exact path="/admin/admin-orders" component={AdminOrders} />
    <Route exact path="/admin/admin-products" component={AdminProducts} />
    <Route path="/my-orders" component={MyOrders} />
    <Route render={() => <Redirect to={{pathname: "/"}} />} />
    </Switch>
    
    </BrowserRouter>
        )
    } 
    
    
}

export default NavBarRx