import { Routes,  Route } from "react-router-dom";
import Student from "../pages/test/student";
import CreateStudent from "../pages/test/createStudent"
import EditStudent from "../pages/test/StudentEdit"
import Cv from "../pages/panelAdmin/cv"
import Plateforme from "../pages/user/plateforme";
import Profile from '../pages/user/NavbarElement/profile';
import ClientHome from "../pages/user/NavbarElement/ClientHome";
import ClientCv from "../pages/user/NavbarElement/ClientCv";
import Interview from "../pages/user/NavbarElement/Interview";
import Login from "../pages/user/UserAuthentification/login"
import Register from "../pages/user/UserAuthentification/register"
import Users from "../pages/panelAdmin/users"
import InterviewAdmin from "../pages/panelAdmin/interview";

import AdminLogin from "../pages/panelAdmin/adminAuth/adminLogin"
import AdminRegister from "../pages/panelAdmin/adminAuth/adminRegister"
function Myrouter(){
   return(
    <Routes>
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/interview" element={<InterviewAdmin />} />
        <Route path="/student/create" element={<CreateStudent />}/>
        <Route path="/edit/:id/student" element={<EditStudent />}/>
        {/* Admin Panel */}
        <Route path="/admin/Cv" element={<Cv/>} />

        {/* clientSide */}
        <Route path="/client/home" element={<ClientHome/>} />
        <Route path="/client" element={<Plateforme/>} />
        <Route path="/client/profile" element={<Profile/>} />
        <Route path="/client/cv" element={<ClientCv/>} />
        <Route path="/client/interview" element={<Interview/>} />

        <Route path="/client/Register" element={<Register/>} />
        <Route path="/client/Login" element={<Login/>} />

        <Route path="/Register" element={<AdminRegister/>} />
        <Route path="/Login" element={<AdminLogin/>} />
    </Routes>
   )
}

export default Myrouter;