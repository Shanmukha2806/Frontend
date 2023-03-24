import React, { useEffect, useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Payfees = () => {
    let navi = useNavigate();
    const [fees, setFees] = useState("false");
    const s_email = window.localStorage.getItem("username");

    useEffect(() => {
        axios.get(`http://localhost:8089/api/Studentfees/${s_email}`).then(res =>
            setFees(res.data.toString()))
    }, [])

    function Payfees() {
        axios.put("http://localhost:8089/api/payfees", {
            'student_email': s_email,
            'fees': 1
        }).then(res => {
            setFees("true")
            console.log(res)
        })

    }
    function logout(e) {
        e.preventDefault();
        window.localStorage.removeItem('jwt');
        window.location.href = '/NavbarComponent';
    }
    return (
        <>
            {fees === "false" ?
                <div>
                    <div>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Container>
                                <Navbar.Brand href="#home">ACADEMIA</Navbar.Brand>
                                <Nav className="me-autos">
                                    <Nav.Link href="/StudentPage">Student Page</Nav.Link>
                                    <Nav.Link onClick={(e) => logout(e)}>Logout</Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </div>
                    <div className='card'>
                        <Card border="light" style={{ width: '18rem' }}>
                            <Card.Header><center>Fees Details</center></Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                <h5><center>Term Fees</center></h5>
                                    <h5><center>Pay  :   Rs.4000</center></h5>
                                    <div className='button-padding'>
                                        <Button onClick={Payfees}>PayFees</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>

                :
                <center>
                    <div>
                        <h3>Fees already paid!</h3>
                    </div>
                </center>

            }
        </>


    );
}
export default Payfees
