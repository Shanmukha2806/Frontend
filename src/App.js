// import logo from './logo.svg';
import './App.css';
// import ViewTeacher from './components/ViewTeacher';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import AdminLogin from './components/AdminLogin';
// import Footer from './components/Footer';
import StudentLogin from './components/StudentLogin';
import AdminPage from './components/Admin/AdminPage';
import AddStudent from './components/Admin/AddStudent';
import UpdateStudent from './components/Admin/UpdateStudent';
import Student from './components/Admin/Student';
import Teachers from './components/Admin/Teachers';
import AddTeacher from './components/Admin/AddTeacher';
import UpdateTeacher from './components/Admin/UpdateTeacher';
import StudentPage from './components/Student/StudentPage';
import EditProfile from './components/Student/EditProfile';
import ApplyLeave from './components/Student/ApplyLeave';
import Payfees from './components/Student/Payfees';
import MessageTeacher from './components/Student/MessageTeacher';
import Logout from './components/Logout';
import SessionLogout from './components/SessionLogout';


function App() {

  console.log(window.localStorage.getItem('jwt'));

  return (
    <div>
      <BrowserRouter>
        {window.localStorage.getItem('jwt') ?
          <Routes>
            <Route path="/" element={<AdminPage />} />            
            <Route path="/AdminPage" element={<AdminPage />} />             
            <Route path="/Student" element={<Student />} />
            <Route path="/Teachers" element={<Teachers />} />
            <Route path="/AddStudent" element={<AddStudent />} />
            <Route path="/AddTeacher" element={<AddTeacher />} />
            <Route path="/UpdateStudent/:student_email" element={<UpdateStudent />} />
            <Route path="/UpdateTeacher/:teacher_email" element={<UpdateTeacher />} />
            <Route path="/StudentPage" element={<StudentPage/>}/>
            <Route path="/EditProfile/:student_email" element={<EditProfile/>}/>
            <Route path="/ApplyLeave" element={<ApplyLeave/>}/>
            <Route path="/Payfees" element={<Payfees/>}/>           
            <Route path="/EditProfile" element={<EditProfile/>}/>
            <Route path="/MessageTeacher" element={<MessageTeacher/>}/>
            <Route path="/Logout"element={<Logout/>}/>
            {/* <Route path="/NavbarComponent" element={<NavbarComponent />} />  */}
          </Routes>
          :
          <Routes>
            <Route path="/" element={<NavbarComponent />} />
            <Route path="/NavbarComponent" element={<NavbarComponent />} /> 
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/StudentLogin" element={<StudentLogin />} />            
            <Route path='/SessionLogout' element={<SessionLogout/>}/>
          </Routes>
        }
        {/* <Routes>

          <Route path="/" element={<NavbarComponent />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/StudentLogin" element={<StudentLogin />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Teachers" element={<Teachers />} />
          <Route path="/AddStudent" element={<AddStudent />} />
          <Route path="/AddTeacher" element={<AddTeacher />} />
          <Route path="/UpdateStudent/:student_email" element={<UpdateStudent />} />
          <Route path="/UpdateTeacher/:teacher_email" element={<UpdateTeacher />} />
          <Route path='/StudentPage' element={<StudentPage />} />
        </Routes> */}

      </BrowserRouter>
    </div >
  );
}

export default App;
