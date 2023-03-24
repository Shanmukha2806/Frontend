import React from 'react'
import "./Navbarstyle.css";
import { IoPersonAddSharp } from "react-icons/io5"
import { Table, Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';


const Student = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8088/api/students").then(res => setData(res.data));

  }, [])
  const addStudent = () => {
    window.location.href = '/AddStudent';
  }

  const updateStudent = (data) => {
    let { student_id, student_firstname, student_lastname, student_password, student_email, dob, gender, student_class, fathername, mothername, teacher_email } = data;
    localStorage.setItem('STUDENTID', student_id);
    localStorage.setItem('FIRSTNAME', student_firstname);
    localStorage.setItem('LASTNAME', student_lastname);
    localStorage.setItem('EMAIL', student_email);
    localStorage.setItem('PASSWORD', student_password);
    localStorage.setItem('DOB', dob);
    localStorage.setItem('GENDER', gender);
    localStorage.setItem('STUDENT_CLASS', student_class);
    localStorage.setItem('FATHERNAME', fathername);
    localStorage.setItem('MOTHERNAME', mothername);
    localStorage.setItem('TEACHEREMAIL', teacher_email);
  }
  function deleteStudent(student_email) {
    try {
      axios.delete(`http://localhost:8088/api/student/${student_email}`)
      setData(data.filter((data) => data.student_email !== student_email))

    }
    catch (err) {
      console.log(err)
    }
  }
  return (

    <div><br />
      <div className='button_style'>
        <Button variant="secondary" className='float-end' onClick={addStudent} > Add Student <IoPersonAddSharp /></Button>
      </div>
      <h2 className='text-center'>Student List</h2>
      <div className='container' align='center'>
        <br />
        <Table className='table table-striped table-bordered' >
          <thead>
            <tr>
              <th>Student Id</th>
              <th>Student FirstName</th>
              <th>Student LastName</th>
              <th>Student Email id</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Student Class</th>
              <th>Father Name</th>
              <th>Mother Name</th>
              <th>Teacher Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map(
                student =>

                  <tr>
                    <td>{student.student_id}</td>
                    <td>{student.student_firstname}</td>
                    <td>{student.student_lastname}</td>
                    <td>{student.student_email}</td>
                    <td>{student.dob}</td>
                    <td>{student.gender}</td>
                    <td>{student.student_class}</td>
                    <td>{student.fathername}</td>
                    <td>{student.mothername}</td>
                    <td>{student.teacher_email}</td>
                    <td>
                      <Link to={'/UpdateStudent/' + student.id}>
                        <Button onClick={() => updateStudent(student)} variant="secondary"> <AiFillEdit /></Button>
                      </Link>
                    </td>
                    <td><Button onClick={() => deleteStudent(student.student_email)} variant="danger"><AiFillDelete /></Button></td>

                  </tr>
              )
            }
          </tbody>
        </Table>
      </div>

    </div>

  )
}

export default Student
