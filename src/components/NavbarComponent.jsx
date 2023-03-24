import React, { useEffect, useState } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbarstyle.css";
import axios from 'axios';
import { Table } from 'react-bootstrap';
import child from 'C:/Users/shanmukha.patnala/school/src/assets/child.jpg';
import principal from 'C:/Users/shanmukha.patnala/school/src/assets/principal.jpg'

function NavbarComponent() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8086/api/teacherDetails").then(res => setData(res.data));

  }, [])

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ACADEMIA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
              <Nav.Link href=""></Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Login" id="collasible-nav-dropdown" >
                <NavDropdown.Item href="/AdminLogin"> Admin Login</NavDropdown.Item>
                <NavDropdown.Item href="/StudentLogin">Student Login</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="auth-wrapper" >
        <div className="auth-inner">
        <h3><center>Teachers</center></h3>
          <Table responsive="sm" align="center">
            <thead align="center">
              <tr>
                <th>Teacher Name</th>
                <th>Teacher Email</th>
              </tr>
            </thead>
            <tbody align="center">
              {
                data.map(
                  teacher =>
                    <tr>
                      <td>{teacher.teachername}</td>
                      <td>{teacher.teacher_email}</td>

                    </tr>
                )
              }
            </tbody>
          </Table>
        </div>
      </div>
      <div >
        <div className="row">
          <div className="col abouttxt">
            <h2>About</h2>
            <p>We are an ambitious international school in Bangalore, widely recognised as a first choice for parents looking for academic excellence. We teach the IB Diploma Programme,a highly prestigious curriculum that sees 70% of our students go on to attend one of the world’s top 100 universities. Our teachers have an average of over 6 years’ experience, and work to create a caring,supportive learning environment where children can fulfil their potential.Explore our school in more detail on our website.</p>
          </div>

          <div className="col">
            <img src={child} className="aboutimg" alt="children"></img>
          </div>
        </div>
      </div>
      <div >
        <div className="row">
          <div className="col">
            <img src={principal} className="aboutprincipalimg" alt="children"></img>
          </div>
          <div className="col aboutprincipal">
            <h2>Message from principal</h2>
            <p>Our vision at Oakridge International School, Bengaluru is to inspire every individual to unlock their true potential through our outstanding education to make the world a better place. We aim to produce compassionate, responsible and innovative global citizens striving for excellence and committed to nurture and progress of society.</p>
          </div>
        </div>
      </div>
      <div className="footercontact"><br/>
        <p align="center">
           Contact Number: +91 81051 66600 
        </p>

      </div>
    </div>
  )
}

export default NavbarComponent

