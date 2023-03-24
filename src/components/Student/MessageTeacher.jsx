import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MessageTeacher = () => {
    let navigate = useNavigate();
    const form = useRef();    
    const s_email = window.localStorage.getItem("username");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_16y89dg', 'template_4qt3cki', form.current, 'tt2DB1w_T4oeRdwxd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert("Message send to teacher successfully");
        navigate("/StudentPage");
    }

    function logout() {
        window.localStorage.removeItem('jwt');
        window.location.href = '/NavbarComponent';
    }
    return (
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
            <section>

                <div className="leave-wrapper">
                    <div className="row">
                        <div className="leave-inner">
                            <div className="col"></div>
                            <div className="form-center">
                                <br />
                                <h3><center>Message</center></h3>
                            </div>
                            <div className="form-content formstyle">
                                <div className='container'>
                                    <Form ref={form}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Student email address</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" name="student_email" value={s_email}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Teacher email address</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" name="teacher_email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Subject" name="subject" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Example textarea</Form.Label>
                                            <Form.Control as="textarea" name="message"  rows={5} />
                                        </Form.Group>
                                        <Button variant="secondary" onClick={sendEmail}>Send</Button>{' '}
                                        <Link to='/StudentPage'>
                                            <button className='btn btn-danger' style={{ marginleft: "40px" }}>Cancel</button>
                                        </Link>
                                    </Form>


                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
        
    )
}

export default MessageTeacher

                    {/* <form ref={form} onSubmit={sendEmail}
                    className='form-control-card'>
                        
                        <input type="email" placeholder='Enter student email' name="student_email" /><br/>
                        <input type="email" placeholder='Enter teachers email' name="teacher_email" /><br/>
                        <input type="subject" placeholder='Enter subject' name="subject" /><br/>
                        <textarea name="message" cols="23" rows="10"></textarea><br/>
                        <Button variant="secondary">Send</Button>{' '}
                        <Button variant='danger'>Cancel</Button>

                    </form> */}