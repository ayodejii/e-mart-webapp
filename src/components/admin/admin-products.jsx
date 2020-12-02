import {React, useState, useEffect} from 'react'
import {Button, Table, Form} from 'react-bootstrap'
import {Redirect, useHistory, Link} from 'react-router-dom'
import Products from '../../Data/Products.json'


function AdminProducts (props){
    
    const [product, setProduct] = useState([])
    //const [filteredProduct, setFilteredProduct] = useState([])
    let filteredProducts = []
    useEffect(() => {
        filteredProducts = Products
        setProduct(filteredProducts)
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
    const deleteProduct = (id) => {
        alert(`product with id: ${id} deleted`)
    }

    const handleChange = (event) => {
        //const products = filteredProducts
        //setProduct(products)
        let products = (event.target.value) ? filteredProducts.filter(x => x.title.toLowerCase().includes(event.target.value))
                        : filteredProducts
                        //debugger
        setProduct(products)
        //console.log(product)
    }

    return (
        <>
        <p className="col-md-4">
        <Form.Control type="text" placeholder="Search"
                         name="title" onChange={handleChange}/>
        </p>
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
                product.map((prdt, i) => {
                    const { id, title, price, imageUrl } = prdt                    
                    return (
                        <tr key={id}>
                          <td>{i+1}</td>
                          <td>{title}</td>
                          <td>{price}</td>
                          <td><Button onClick={() => takeToEdit(id)}>Edit</Button></td>
                          <td><Button onClick={() => deleteProduct(id)} variant="danger">Delete</Button></td>
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