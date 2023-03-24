import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const UpdateTeacher = () => {

    let navigate = useNavigate();

    // const [teacher_id, setID] = useState(0);
    const [teachername, setName] = useState('');
    const [teacher_email, setTeacherEmail] = useState('');
    const [gender, setGender] = useState('');
    const [teacher_class, setClass] = useState('');
    const [subject, setSubject] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');

    useEffect(() => {
        // setID(localStorage.getItem("ID"));
        setName(localStorage.getItem("NAME"));
        setTeacherEmail(localStorage.getItem("TEACHEREMAIL"));
        setGender(localStorage.getItem("GENDER"));
        setClass(localStorage.getItem("CLASS"));
        setSubject(localStorage.getItem("SUBJECT"));
        setPhoneNumber(localStorage.getItem("PHONENUMBER"));
    }, [])

    const update = () => {
        axios.put(`http://localhost:8088/api/teacher/${teacher_email}`, {
            teachername,
            teacher_email,
            gender,
            teacher_class,
            subject,
            phonenumber

        }).then(() => {
            console.log("updated")
        })
        navigate('/AdminPage')
    }
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ACADEMIA</Navbar.Brand>
                </Container>
            </Navbar>
            <div className="teacher-wrapper">
                <div className="row">
                    <div className="teacher-inner">
                        <div className="col">
                            <div className="form-center">
                                <br />
                                <h3><center>Update Student</center></h3>
                            </div>
                            <div className="form-content formstyle">
                                <form>
                                    <div className='mb-3' >
                                        <label><strong>TeacherName:</strong></label>
                                        <input placeholder='Teacher Name' name='teachername' className='form-control' value={teachername} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>Email:</strong></label>
                                        <input placeholder='Email' name='teacher_email' className='form-control' value={teacher_email} onChange={(e) => setTeacherEmail(e.target.value)} />

                                    </div>

                                    <div className='mb-3'>
                                        <label><strong>Gender:</strong></label>
                                        <input placeholder='Gender' name='gender' className='form-control' value={gender} onChange={(e) => setGender(e.target.value)} />
                                    </div>
                                    <div className='mb-3' >
                                        <label><strong>Class:</strong></label>
                                        <input placeholder='Class' name='teacher_class' className='form-control' value={teacher_class} onChange={(e) => setClass(e.target.value)} />

                                    </div>
                                    <div className='mb-3' >
                                        <label><strong>Subject:</strong></label>
                                        <input placeholder='Subject' name='subject' className='form-control' value={subject} onChange={(e) => setSubject(e.target.value)} />

                                    </div>
                                    <div className='mb-3' >
                                        <label><strong>Phone Number:</strong></label>
                                        <input placeholder='Phonenumber' name='phonenumber' className='form-control' value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} />

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
        </div >
    )
}

export default UpdateTeacher;