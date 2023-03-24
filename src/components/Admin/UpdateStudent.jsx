import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";


const UpdateStudent = () => {

    let navigate = useNavigate();

    const [student_firstname, setFirstName] = useState('');
    const [student_lastname, setLastName] = useState('');
    const [student_email, setEmail] = useState('');
    const [student_password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [student_class, setStudentClass] = useState('');
    const [fathername, setFathername] = useState('');
    const [mothername, setMothername] = useState('');    
    const [teacher_email, setTeacherEmail] = useState('');

    useEffect(() => {
        setFirstName(localStorage.getItem("FIRSTNAME"));
        setLastName(localStorage.getItem("LASTNAME"));
        setEmail(localStorage.getItem("EMAIL"));
        setPassword(localStorage.getItem("PASSWORD"));
        setDob(localStorage.getItem("DOB"));
        setGender(localStorage.getItem("GENDER"));
        setStudentClass(localStorage.getItem("STUDENT_CLASS"));
        setFathername(localStorage.getItem("FATHERNAME"));
        setMothername(localStorage.getItem("MOTHERNAME"));        
        setTeacherEmail(localStorage.getItem("TEACHEREMAIL"));
    }, [])

    const update = () => {
        axios.put(`http://localhost:8088/api/student/${student_email}`, {
            student_firstname,
            student_lastname,
            student_email,
            student_password,
            dob,
            gender,
            student_class,
            fathername,
            mothername,
            teacher_email
        }).then(() => {
            console.log("updated")
        })
        window.location.href = '/AdminPage';
    }
    function logout(e) {
        e.preventDefault();
        window.localStorage.removeItem('jwt');
        window.location.href = '/';
    }
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ACADEMIA</Navbar.Brand>
                </Container>
            </Navbar>
            <div className="student-wrapper">
                <div className="row">
                    <div className="student-inner">
                        <div className="col">
                            <div className="form-center">
                                <br />
                                <h3><center>Update Student</center></h3>
                            </div>
                            <div className="form-content formstyle">
                                <form>
                                    <div className='mb-3' >
                                        <label><strong>Firstname:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter Firstname' value={student_firstname} name='student_firstname' onChange={(e) => setFirstName(e.target.value)} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>Lastname:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter Lastname' value={student_lastname} name='student_lastname' onChange={(e) => setLastName(e.target.value)} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>Email:</strong></label>
                                        <input placeholder='Enter Email Address' value={student_email} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>DOB:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter dob' value={dob} name='dob' onChange={(e) => setDob(e.target.value)} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>Gender:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter gender' value={gender} name='gender' onChange={(e) => setGender(e.target.value)} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>StudentClass:</strong></label>
                                        <input type='text' minLength={1} placeholder='Enter student class' value={student_class} name='student_class' onChange={(e) => setStudentClass(e.target.value)} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>FatherName:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter Father name' value={fathername} name='fathername' onChange={(e) => setFathername(e.target.value)} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>MotherName:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter Mother name' value={mothername} name='mothername' onChange={(e) => setMothername(e.target.value)} className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>TeacherEmail:</strong></label>
                                        <input type='email' minLength={4} placeholder='Enter Teacher email' value={teacher_email} name='teacher_email' onChange={(e) => setTeacherEmail(e.target.value)} className='form-control' />
                                    </div>
                                    <div align="center">
                                        <Button variant="secondary" onClick={update}>Update </Button>{' '}
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

export default UpdateStudent;