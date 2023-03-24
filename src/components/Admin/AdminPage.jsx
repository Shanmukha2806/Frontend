import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbarstyle.css";
import Teachers from './Teachers';
import Student from './Student';
import Logout from '../Logout';

const AdminPage = () => {
    const [page, setPage] = useState("")

    function logout(e) {
        e.preventDefault();
        window.localStorage.removeItem('jwt');
        window.location.href = '/';
    }
    return (
        <Logout>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand onClick={(e) => setPage("")}>ACADEMIA</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={(e) => setPage("Teachers")}>Teachers</Nav.Link>
                                <Nav.Link onClick={(e) => setPage("Student")}>Students</Nav.Link>

                                <Nav.Link onClick={(e) => logout(e)}>Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <>
                    {page === "Teachers" ?
                        <Teachers></Teachers>
                        :
                        page === "Student" ?
                            <Student></Student>
                            :
                            <>
                                <h2><center>Welcome to Admin Page</center></h2><br />
                            </>

                    }
                </>
            </div >
        </Logout>
    )
}

export default AdminPage
