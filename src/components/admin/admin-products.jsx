import {React, useState, useEffect} from 'react'
import {Button, Table} from 'react-bootstrap'
import {Redirect, useHistory, Link} from 'react-router-dom'
import Products from '../../Data/Products.json'


function AdminProducts (props){
    
    const [product, setProduct] = useState({
        products:[]
    })

    useEffect(() => {
        setProduct({products: Products})
    }, [])

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
        return <Redirect to='/home'/>
    return (
        <>
        <Button style={style} onClick={takeToPage}>
            Add New Product
        </Button>
        <div className="col-md-6">
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {
                product.products.map((prdt, i) => {
                    const { Id, Product, Price, ImageUrl } = prdt                    
                    return (
                       <tr key={Id}>
                          <td>{i+1}</td>
                          <td>{Product}</td>
                          <td>{Price}</td>
                          <td><Link to={`/admin/products-form/${Id}`}>Edit</Link></td>
                       </tr>
                    )
                })
            }
            </tbody>
        </Table>
        </div>
        
        </>
    )

    
}
export default AdminProducts