import {React} from 'react'
import {NavDropdown} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Home from './home'

const Logout = (props) => {

    const history = useHistory();
    const handleLogout = () => {
        localStorage.clear()
        // debugger
        //window.location.reload(false)
        // debugger
        history.push("/login")
    }

    return (
        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
    )
}

export default Logout