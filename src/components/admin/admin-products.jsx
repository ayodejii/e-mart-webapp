import {React, Component} from 'react'
import {Button} from 'react-bootstrap'
import {Redirect, NavLink, Link, Route, BrowserRouter, useHistory, Switch} from 'react-router-dom'


function AdminProducts (props){
    const style = {
        margin: "20px",
        display: "flex"
    }

    const history = useHistory()

    const takeToPage = () => {
        try {
            history.push("/admin/products-form", {from: 'AdminProducts'})
            
        } catch (error) {
            console.log(error)
        }
        //console.log(props.user)
    }
    
    if(!props.user.isAdmin)
        return <Redirect to='/home'  />
        
    return (
        <Button style={style} onClick={takeToPage}>
            Add New Product
        </Button>
    )

    
}
export default AdminProducts