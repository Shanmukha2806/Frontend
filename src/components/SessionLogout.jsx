import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Navbar,Container } from 'react-bootstrap';

const SessionLogout = () => {
    const nav = useNavigate();
    const navigate = () => {
        nav('/NavbarComponent')
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ACADEMIA</Navbar.Brand>
                </Container>
            </Navbar>
            <div>
                <div>
                    <center>
                        <h3>Session Logout</h3>
                        <Button variant="secondary" onClick={navigate}>Login Again!!</Button>
                    </center>
                </div>
            </div>
        </div>



    )
}

export default SessionLogout
