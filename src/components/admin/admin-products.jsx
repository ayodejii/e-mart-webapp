import {React, Component} from 'react'
import {Redirect, NavLink, Link, Route, BrowserRouter, Switch} from 'react-router-dom'
import ProductForm from './products-form'

function AdminProducts (){
        
    return (
        <BrowserRouter>
       <Link to="/products-form">
       Go to Page
       </Link> 

        <Switch>
        <Route exact path="/products-form" component={ProductForm}/>
        </Switch>

        </BrowserRouter>
    )

    
}
export default AdminProducts