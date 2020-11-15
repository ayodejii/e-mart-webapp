import {React, Component} from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'

const Login = (props) => {

    const container = {
        width: "20%",
        marginLeft: "10%",
        marginTop: "20px"
    }
    //const {changeForm} = props 
    return ( 
    <>
        <div style={container}>
    {props.user.isLogged ? <h3>Welcome, {props.user.username}</h3> :
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter username" 
                name="username" onChange={props.changeForm}
                />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
                name="password" onChange={props.changeForm}/>
            </Form.Group>
            
            <Button onClick={props.submitForm} variant="primary" type="button">
                Submit
            </Button>
            </Form>}
        </div>
    </> 
    );
}
 
export default Login;