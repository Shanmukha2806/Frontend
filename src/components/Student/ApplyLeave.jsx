import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const ApplyLeave = () => {
    let navigate = useNavigate();
    const [data, setData] = useState({
        leave_id: '',
        fromdate: '',
        todate: '',
        description: '',
        student_email: '',
        teacher_email: '',

    })
    const { leave_id, fromdate, todate, description, student_email, teacher_email } = data;
    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const addleave = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:8089/api/addleave", {
                fromdate: fromdate,
                todate: todate,
                description: description,
                student_email: student_email,
                teacher_email: teacher_email,
            }).then(res => console.log(res),
                alert("Leave added successfully"))

            navigate("/StudentPage")
        }
        catch (error) {
            alert("User failed")
        }
    }
    function logout(e) {
        e.preventDefault();
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
            <div className="leave-wrapper">
                <div className="row">
                    <div className="leave-inner">
                        <div className="col">
                            <div className="form-center">
                                <br />
                                <h3><center>Add Leave</center></h3>
                            </div>
                            <div className="form-content formstyle">
                                <form>
                                    <div className='mb-3' >
                                        <label><strong>From:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter From date' value={fromdate} onChange={onChangeHandler} name='fromdate' className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>To:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter To Date' value={todate} onChange={onChangeHandler} name='todate' className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>Description:</strong></label>
                                        <input type='text' minLength={5} placeholder='Enter leave reason ' value={description} onChange={onChangeHandler} name="description" className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>Student Email:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter student email' value={student_email} onChange={onChangeHandler} name='student_email' className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <label><strong>Teacher Email:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter teacher email' value={teacher_email} onChange={onChangeHandler} name='teacher_email' className='form-control' />
                                    </div>
                                    <div align="center">
                                        <Button variant="secondary" onClick={addleave} >Add Leave </Button>{' '}
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
export default ApplyLeave
