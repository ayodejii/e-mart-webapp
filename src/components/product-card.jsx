import React from 'react';
import {Card, Button} from 'react-bootstrap'


function ProductCard(props)
{
    const {title, category, price, imageUrl} = props.allProducts

    return (
        <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
    <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
export default ProductCard