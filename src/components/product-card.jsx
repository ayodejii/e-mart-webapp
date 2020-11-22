import React from 'react';
import {Card, Button} from 'react-bootstrap'


export default function ProductCard(props)
{
    const {product, price, category, imageUrl} = props.products.product
    console.log("productings", product)
    const formatCur = (val) => "NGN" + val
    //console.log(imageUrl, product, price)
    return (
        <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
            <Card.Title>{product}</Card.Title>
                <Card.Text>
                    {formatCur(price)}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}