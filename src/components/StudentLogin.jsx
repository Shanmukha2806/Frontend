import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FiLogIn } from "react-icons/fi";
import loginpic from 'C:/Users/shanmukha.patnala/school/src/assets/loginpic.jpg';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';    
import "./Navbarstyle.css";
import NavDropdown from 'react-bootstrap/NavDropdown';

const StudentLogin = () => {
    const [data, setData] = useState({
        student_email: '',
        student_password: ''

    });
    const { student_email, student_password } = data;
    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    // let navigate = useNavigate();
    // function signin() {
    //     axios.post("http://localhost:8084/api/authenticate");
    // }
    // function signin() {
    //     navigate('/StudentPage');
    //  }

    const validateForm = student_email.length > 0 && student_password.length > 0;

    function SubmitHandler(sh) {
        sh.preventDefault();
        console.log(data)
        // navs('/dashboard')
        axios.post("http://localhost:8084/api/authenticate", {
            student_email: student_email,
            student_password: student_password
        }).then(res => {
            if (res.data === 'Login Failed') {
                alert('Enter Correct Email and Password!!!')
                return
            } else {
                window.localStorage.setItem('jwt', res.data);
                window.localStorage.setItem("username", student_email);
                window.location.href = "/StudentPage"
            }
        })
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ACADEMIA</Navbar.Brand>
                    <div>
                    {/* <div>Student Login</div> */}
                        <Nav className="me-auto">
                            <Nav.Link href="/NavbarComponent">Home</Nav.Link>
                            <Nav>
                                <NavDropdown title="Login" id="collasible-nav-dropdown" >
                                    <NavDropdown.Item href="/AdminLogin">Admin Login</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Nav>
                    </div>
                </Container>
            </Navbar><br/>
            <h3><center>Student Login</center></h3>
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
                                        {/* <label>Email:</label> */}
                                            <input type="email" name="student_email" value={student_email} className="form-control " placeholder="Enter email" onChange={onChangeHandler} autoFocus />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" name="student_password" value={student_password} className="form-control" placeholder="Enter password" onChange={onChangeHandler} />
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

export default StudentLogin;
