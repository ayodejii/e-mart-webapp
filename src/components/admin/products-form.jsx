import {React} from 'react'
import {withRouter} from 'react-router-dom'

function ProductForm(props)
{
    if (props.user.isAdmin){

    return ( <h4>Products Form works</h4> );
}
    <h1>no user</h1>
}
 
export default ProductForm;