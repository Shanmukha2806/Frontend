import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";

const AddStudent = () => {
    let navigate = useNavigate();
    const [data, setData] = useState({
        student_firstname: "",
        student_lastname: "",
        student_email: "",
        student_password: "",
        dob: "",
        gender: "",
        student_class: "",
        fathername: "",
        mothername: "",
        teacher_email:"",
        fees: 0
    })


    const { student_firstname, student_lastname, student_email, student_password, dob, gender, student_class, fathername, mothername,teacher_email,fees} = data;
    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const saveStudent = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:8088/api/student", {
                student_firstname: student_firstname,
                student_lastname: student_lastname,
                student_email: student_email,
                student_password: student_password,
                dob: dob,
                gender: gender,
                student_class: student_class,
                fathername: fathername,
                mothername: mothername,
                teacher_email: teacher_email,
                fees : fees
                
            }).then(res => console.log(res),
                alert("Student added successfully"))

            navigate("/AdminPage")
        }
        catch (error) {
            alert("User failed")
        }
    }
    function logout(e) {
        e.preventDefault();
        window.localStorage.removeItem('jwt');
        window.location.href = '/';
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ACADEMIA</Navbar.Brand>
                    <Nav className="me-autos">
                        <Nav.Link onClick={(e) => logout(e)}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="student-wrapper">
                <div className="row">
                    <div className="student-inner">
                        <div className="col">
                            <div className="form-center">
                                <br />
                                <h3><center>Add Students</center></h3>
                            </div>
                            <div className="form-content formstyle">
                                <form>
                                    <div className='mb-3' >
                                        <label><strong>Firstname:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter Firstname' value={student_firstname} name='student_firstname' onChange={onChangeHandler} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>Lastname:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter Lastname' value={student_lastname} name='student_lastname' onChange={onChangeHandler} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>Email:</strong></label>
                                        <input type='email' placeholder='Enter Email Address' value={student_email} name='student_email' onChange={onChangeHandler} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>Password:</strong></label>
                                        <input type='password' minLength={4} placeholder='Enter Password' value={student_password} name='student_password' onChange={onChangeHandler} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>DOB:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter dob' value={dob} name='dob' onChange={onChangeHandler} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>Gender:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter gender' value={gender} name='gender' onChange={onChangeHandler} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>StudentClass:</strong></label>
                                        <input type='text' minLength={1} placeholder='Enter student class' value={student_class} name='student_class' onChange={onChangeHandler} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>FatherName:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter Father name' value={fathername} name='fathername' onChange={onChangeHandler} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>MotherName:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter Mother name' value={mothername} name='mothername' onChange={onChangeHandler} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>TeacherEmail:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter Teacher email' value={teacher_email} name='teacher_email' onChange={onChangeHandler} className='form-control' />
                                    </div>
                                    <div align="center">
                                        
                                        <Button variant="secondary" onClick={saveStudent}>Add </Button>{' '}
                                        <Link to='/AdminPage'>
                                            <button className='btn btn-danger' style={{ marginleft: "40px" }}>Cancel</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddStudent;

