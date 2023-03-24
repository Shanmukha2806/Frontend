import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoPersonAddSharp } from "react-icons/io5"
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import Logout from '../Logout';
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';


const Teachers = () => {

    let navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8088/api/teachers").then(res => setData(res.data));

    }, [])
    const addTeacher = () => {
        navigate("/AddTeacher")
    }
    const updateTeacher = (data) => {
        let { teacher_id, teachername, teacher_email, gender, teacher_class, subject, phonenumber } = data;
        localStorage.setItem('TEACHERID', teacher_id);
        localStorage.setItem('NAME', teachername);
        localStorage.setItem('TEACHEREMAIL', teacher_email);
        localStorage.setItem('GENDER', gender);
        localStorage.setItem('CLASS', teacher_class);
        localStorage.setItem("SUBJECT", subject);
        localStorage.setItem('PHONENUMBER', phonenumber);
    }
    function deleteTeacher(teacher_email) {
        try {
            axios.delete(`http://localhost:8088/api/teacher/${teacher_email}`)
            setData(data.filter((data) => data.teacher_email !== teacher_email))

        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <Logout>
            <div>
                <br />
                <div className='button_style'>
                    <Button className='float-end' variant="secondary" onClick={addTeacher} >Add Teacher<IoPersonAddSharp /></Button>

                </div>
                <h2 className='text-center'>Teacher List</h2>
                <div className='container' align='center'>
                    <br />
                    <Table className='table table-striped table-bordered' >
                        <thead>
                            <tr>
                                <th>Teacher Id</th>
                                <th>Teacher Name</th>
                                <th>Teacher Email id</th>
                                <th>Gender</th>
                                <th>Teacher Class</th>
                                <th>SUBJECT</th>
                                <th>Phone Number</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map(
                                    teacher =>

                                        <tr>
                                            <td>{teacher.teacher_id}</td>
                                            <td>{teacher.teachername}</td>
                                            <td>{teacher.teacher_email}</td>
                                            <td>{teacher.gender}</td>
                                            <td>{teacher.teacher_class}</td>
                                            <td>{teacher.subject}</td>
                                            <td>{teacher.phonenumber}</td>
                                            <td>
                                                <Link to={'/UpdateTeacher/' + teacher.teacher_email}>
                                                    <Button onClick={() => updateTeacher(teacher)} variant="secondary"> <AiFillEdit /></Button>
                                                </Link>
                                            </td>
                                            <td><Button onClick={() => deleteTeacher(teacher.teacher_email)} variant="danger"><AiFillDelete /></Button></td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </Logout>
    )
}

export default Teachers

