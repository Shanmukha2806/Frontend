import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "C:/Users/shanmukha.patnala/school/src/components/Navbarstyle.css";

const StudentPage = () => {

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
    const [fees, setFees] = useState();
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
    }, [])

    function logout() {
        window.localStorage.removeItem('jwt');
        window.location.href = '/NavbarComponent';
    }
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>ACADEMIA</Navbar.Brand>

                        <Nav className="me">
                            <Nav.Link href="/EditProfile">EditProfile</Nav.Link>
                            <Nav.Link href="/ApplyLeave">ApplyLeave</Nav.Link>
                            <Nav.Link href="/Payfees">PayFees</Nav.Link>
                            <Nav.Link href='/MessageTeacher'>MessageTeacher</Nav.Link>
                            <Nav.Link onClick={(e) => logout(e)}>Logout</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div className='student-card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Student Profile</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Name : {student_firstname + ' ' + student_lastname}</ListGroup.Item>
                        <ListGroup.Item>Email : {student_email}</ListGroup.Item>
                        <ListGroup.Item>DOB :  {dob}</ListGroup.Item>
                        <ListGroup.Item>Class : {student_class}</ListGroup.Item>
                        <ListGroup.Item>Gender : {gender}</ListGroup.Item>
                        <ListGroup.Item>FatherName : {fathername}</ListGroup.Item>
                        <ListGroup.Item>MotherName : {mothername}</ListGroup.Item>
                        <ListGroup.Item>TeacherEmail : {teacher_email}</ListGroup.Item>
                    </ListGroup>
                </Card>

            </div>
        </div >

    )
}
export default StudentPage
