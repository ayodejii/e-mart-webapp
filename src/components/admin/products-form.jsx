import {React, useEffect, useState} from 'react'
import {Redirect, withRouter, useHistory, Link} from 'react-router-dom'
import {Form, Button, InputGroup} from 'react-bootstrap'
import ProductCard from '../product-card'
import Products from '../../Data/Products.json'

function ProductForm(props)
{
    const [products, setProducts] = useState({
        product: {title: "", price: "", imageUrl: "", category: ""},
        errors: {
            product: "", price: "", imageUrl: "", category: "", isvalid: false
        },
        id: props.match.params.id
    })

    useEffect(() => {

    let vproduct = {...products}
    const id = vproduct.id
        if (id === "new")
            return;
        vproduct.product = Products.filter(x => x.Id == id)[0]
        setProducts(vproduct)
    }, [props])

    const history = useHistory()
    let formValues = products.product

    if (props.user.isAdmin)
    {
        const handleChange = (e) => {
             
            const {name, value} = e.target
            const errors = {...products.errors}
            switch (name) {
                case "product":
                    errors.product = value.length < 3 ? "products name should be at least three chars"
                    : ""
                    break;
                case "price":
                    errors.price = value > 0 ? "" : "Only numbers are taken"
                    break;
                case "category":
                    errors.category = value.toString() === 'Choose...' ? "please pick a valid value" : ""
                    break;
                     
                default:
                    break;
            }
            formValues[name] = value
            setProducts({...products, errors, formValues})
            // console.log(products.product)
        }
        const setRedBorder = (err) => {
            if(err.length > 0)
            return {border: "solid red 3px"}   
        }

        const handleSubmit = () => {
            console.log(products)
            history.push('/admin/admin-products')
        }

    const errorSpan = (err) => <span style={{color: "red"}}>{err}</span>
    console.log(products)
    
        return (
            <div className="row container" style={{marginLeft: "10%", marginTop: "10pt"}}>
            <div className="col-md-6">
                <Form>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control style={setRedBorder(products.errors.product)} value={products.product.title} type="text" placeholder="Product"
                         name="product" onChange={handleChange}
                                />
                        {products.errors.product.length > 0 && errorSpan(products.errors.product)}

                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Price</Form.Label>
                    
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>NGN</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control style={setRedBorder(products.errors.price)} type="text" placeholder="Price" 
                            name="price" onChange={handleChange} value={products.product.price} />
                        </InputGroup>
                        {products.errors.price.length > 0 && errorSpan(products.errors.price)}
                    </Form.Group>
                    
                </Form>
            </div>
            <div className="col-md-6">
                <ProductCard allProducts={formValues} />
            </div>
        </div>
        )
    }
    return <Redirect to="/home" />
    
}
 
export default ProductForm;