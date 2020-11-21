import {React} from 'react'
import {NavDropdown} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Home from './home'

const Logout = (props) => {

    const history = useHistory();
    const handleLogout = () => {
        localStorage.clear()
        window.location.reload(false)
        history.push("/home")
    }

    return (
        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
    )
}

export default Logout