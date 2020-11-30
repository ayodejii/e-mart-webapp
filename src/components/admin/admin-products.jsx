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

    
    if(!props.user.isAdmin)
        return <Redirect to='/home'/>
    

    const takeToPage = () => {
        try {
            history.push("/admin/products-form/new", {from: 'AdminProducts'})
            
        } catch (error) {
            console.log(error)
        }
    }

    const takeToEdit = (id) => {
        history.push(`/admin/products-form/${id}`)
    }
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
                    const { id, title, price, imageUrl } = prdt                    
                    return (
                        <tr key={id}>
                          <td>{i+1}</td>
                          <td>{title}</td>
                          <td>{price}</td>
                          <td><Button onClick={() => takeToEdit(id)}>Edit</Button></td>
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