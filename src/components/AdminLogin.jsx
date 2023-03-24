import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { FiLogIn } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import loginpic from 'C:/Users/shanmukha.patnala/school/src/assets/loginpic.jpg';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbarstyle.css";
import NavDropdown from 'react-bootstrap/NavDropdown';

function AdminLogin() {
    const [data, setData] = useState({
        admin_username: '',
        admin_password: ''

    });
    const { admin_username, admin_password } = data;
    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const validateForm = admin_username.length > 0 && admin_password.length > 0;

    function SubmitHandler(sh) {
        sh.preventDefault();
        console.log(data)
        axios.post("http://localhost:8085/api/signin", {
            admin_username: admin_username,
            admin_password: admin_password
        }).then(res => {
            if (res.data === 'Login Failed') {
                alert('Enter Correct Email and Password!!!')
                return
            } else {
                window.localStorage.setItem('jwt', res.data)
                window.location.href = "/"
            }
        })
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ACADEMIA</Navbar.Brand>
                    <div>
                        <Nav className="me-auto">
                            <Nav.Link href="/NavbarComponent">Home</Nav.Link>
                            <Nav>
                                <NavDropdown title="Login" id="collasible-nav-dropdown" >
                                    <NavDropdown.Item href="/StudentLogin">Student Login</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Nav>
                    </div>
                </Container>
            </Navbar><br/>            
            <h3><center>Admin Login</center></h3>
            <div className="wrapper-inner">
                <div className="row">
                    <center>
                        <div className="wrapper-inner-a">
                            <div className='col'>
                                <img src={loginpic} width="300px" alt='error' className='img-login'></img>
                            </div><br />
                            <div className='col'>
                                <div>
                                    <form onSubmit={SubmitHandler}>

                                        <div className="mb-1">
                                            <input type="email" name="admin_username" value={admin_username} className="form-control" placeholder="Enter email" onChange={onChangeHandler} autoFocus />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" name="admin_password" value={admin_password} className="form-control" placeholder="Enter password" onChange={onChangeHandler} />
                                        </div>
                                        <div className='btn-lg-sp'>
                                            <button type="submit" className="btn btn-success" disabled={!validateForm}>
                                                Login <FiLogIn />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </div>

        </div>
    );
}
export default AdminLogin;



