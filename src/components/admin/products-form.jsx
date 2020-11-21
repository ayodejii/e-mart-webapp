import {React} from 'react'
import {Redirect, withRouter} from 'react-router-dom'

function ProductForm(props)
{
    if (props.user.isAdmin){

    return ( <h4>Products Form works</h4> );
    }
    return <Redirect to="/home" />
    
}
 
export default ProductForm;