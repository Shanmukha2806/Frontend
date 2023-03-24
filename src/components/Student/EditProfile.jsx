import React from 'react';
// import { Button } from 'react-bootstrap';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    let navigate = useNavigate();    

    const [student_id, setID] = useState(0);
    const [student_firstname, setFirstName] = useState('');
    const [student_lastname, setLastName] = useState('');
    const [student_email, setEmail] = useState('');
    const [student_password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [student_class, setStudentClass] = useState(0);
    const [fathername, setFathername] = useState('');
    const [mothername, setMothername] = useState('');
    const [teacher_email, setTeacherEmail] = useState('');
    const [fees,setFees] = useState();
    const s_email = window.localStorage.getItem("username");
    useEffect(() => {
        axios.get(`http://localhost:8087/api/student/${s_email}`).then(res => {
            console.log(res.data.student_id);
            setID(res.data.student_id)
            setFirstName(res.data.student_firstname)
            setLastName(res.data.student_lastname)
            setEmail(res.data.student_email)
            setPassword(res.data.student_password)
            setGender(res.data.gender)
            setDob(res.data.dob)
            setStudentClass(res.data.student_class)
            setFathername(res.data.fathername)
            setMothername(res.data.mothername)
            setTeacherEmail(res.data.teacher_email)
            setFees(res.data.fees)
        });
    },[])
    const update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8087/api/student/${student_email}`, {
            'student_firstname': student_firstname,
            'student_lastname': student_lastname,
            'student_email': student_email,
            'student_password': "",
            'dob': dob,
            'gender': gender,
            'student_class': student_class,
            'fathername': fathername,
            'mothername': mothername,
            'teacher_email': teacher_email,
            'fees' : false

        }).then(res => {
            console.log(res.status)
            alert("Updated successfully")
            navigate("/StudentPage")
        })

    }
    function logout(e) {
        e.preventDefault();
        window.localStorage.removeItem('jwt');
        window.location.href = '/Navbarcomponent';
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
                                        <label><strong>TeacherName:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter Teacher email' value={teacher_email} name='teacher_email' onChange={(e) => setTeacherEmail(e.target.value)} className='form-control' />
                                    </div>
                                    <div align="center">
                                        {/* <button className='btn btn-primary' disabled={!validate}>Add </button>{' '} */}

                                        <Button variant="secondary" onClick={update}>Update </Button>{' '}
                                        <Link to='/StudentPage'>
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

export default EditProfile
