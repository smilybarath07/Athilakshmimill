import React from 'react'
import './App.css'
import Navbar from './navbar.jsx'
import Login from './login.jsx'
import Company from './company.jsx'
import Department from './department.jsx'
import Designation from './designation.jsx'
import Employee_details from './employee_details.jsx'
import AddCompany from './add_employee.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,Router } from 'react-router-dom';



export default function App() {

  const[isAdd,setIsAdd]=React.useState(false);

  const [isLogin, setIsLogin] = React.useState(()=>{
    return localStorage.getItem("isLogin") === "true";
  }
  );

  const handleLogin = () => { setIsLogin(true); };
  const handleLogout = () => { setIsLogin(false); 
    localStorage.removeItem('isLogin');
    localStorage.removeItem('username');
   };

  if (!isLogin) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
        <Navbar onLogout={handleLogout}/>
        <Routes>
          <Route path="/company" element={<Company  setIsAdd={setIsAdd} />} />
          <Route path="/department" element={<Department setIsAdd={setIsAdd}/>} />
          <Route path="/designation" element={<Designation setIsAdd={setIsAdd}/>} />
          <Route path="/employee_details" element={<Employee_details setIsAdd={setIsAdd} />} />
        </Routes>
        {isAdd ?<AddCompany setIsAdd={setIsAdd}/>:<></>}
    </BrowserRouter>
  )
}
