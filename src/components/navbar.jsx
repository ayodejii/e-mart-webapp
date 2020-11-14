import React, { Component } from 'react';
import {Link, Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './home'
import ShoppingCart from './shopping-cart'
import {FormControl, Form, Button, Nav, NavDropdown, Navbar} from 'react-bootstrap'

class NavBarRx extends Component {    
    render(){

        return(
            <BrowserRouter>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/">React-Bootstrap</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                <Nav.Link><Link to="/shopping-cart">Shopping Cart</Link></Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
    <Switch>
    <Route exact path="/" />
    <Route exact path="/home" component={Home} />
    <Route path="/shopping-cart" component={ShoppingCart} />
    
    </Switch>
    
    </BrowserRouter>
        )
    }     
}


export default NavBarRx