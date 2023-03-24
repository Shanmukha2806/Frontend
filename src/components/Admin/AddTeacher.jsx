import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Button } from 'react-bootstrap';

const AddTeacher = () => {
    let navigate = useNavigate();
    const [data, setData] = useState({
        teachername: "",
        teacher_email: "",
        gender: "",
        teacher_class: "",
        subject:"",
        phonenumber: "",
    })


    const { teachername, teacher_email, gender, teacher_class,subject, phonenumber } = data;
    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    // const validate = student_firstname.length > 0 && student_lastname.length > 0 && student_email.length > 0 && student_password.length > 0 && dob.length > 0 && gender.length > 0 && fathername.length > 0 && mothername.length > 0;
    const saveTeacher = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:8088/api/teacher", {
                teachername: teachername,
                teacher_email: teacher_email,
                gender: gender,
                teacher_class: teacher_class,
                phonenumber: phonenumber,
                subject : subject,
            }).then(res => console.log(res),
                alert("Teacher added successfully"))

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
            {/* <Form className="form"> */}
            <div className="teacher-wrapper">
                <div className="row">
                    <div className="teacher-inner">
                        <div className="col">
                            <div className="form-center">
                                <br />
                                <h3><center>Add Teachers</center></h3>
                            </div>
                            <div className="form-content formstyle">
                                {/* <form onSubmit={saveTeacher}> */}
                                <form>
                                    <div className='mb-3' >
                                        <label><strong>Teacher Name:</strong></label>
                                        <input type='text' className="form-control" minLength={4} placeholder='Enter name' value={teachername} name='teachername' onChange={onChangeHandler} />
                                    </div>
                                    <div className='mb-3' >
                                        <label><strong>Email:</strong></label>
                                        <input type='email' className="form-control" minLength={4} placeholder='Enter email' value={teacher_email} name='teacher_email' onChange={onChangeHandler} />
                                    </div>
                                    <div className='mb-3' >
                                        <label><strong>Gender:</strong></label>
                                        <input type='text' className="form-control" placeholder='Enter gender' value={gender} name='gender' onChange={onChangeHandler}/>
                                    </div>
                                    <div className='mb-3' >
                                        <label><strong>Teacher Class:</strong></label>
                                        <input type='text' className="form-control" minLength={1} placeholder='Enter Teacher Class' value={teacher_class} name='teacher_class' onChange={onChangeHandler} />
                                    </div>
                                    <div className='mb-3' >
                                        <label><strong>Subject:</strong></label>
                                        <input type='text' className="form-control" minLength={10} placeholder='Enter subject' value={subject} name='subject' onChange={onChangeHandler}/>
                                    </div>
                                    <div className='mb-3' >
                                        <label><strong>Phone Number:</strong></label>
                                        <input type='text' className="form-control" minLength={10} placeholder='Enter phonenumber' value={phonenumber} name='phonenumber' onChange={onChangeHandler}/>
                                    </div>
                                    <div className='mt-3'>
                                        {/* <button className='btn btn-primary' disabled={!validate}>Add </button>{' '} */}

                                        <Button variant="secondary" onClick={saveTeacher}>Add </Button>{' '}
                                        <Link to='/AdminPage'>
                                            <button className='btn btn-danger' style={{ marginleft: "40px" }}>Cancel</button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                    {/* </Form > */}

                </div >

         </div >
         </div>

    )
}
export default AddTeacher;