import React from 'react';
import './login.css';
import Img from './assets/Capture.png';
import { FaUser } from "react-icons/fa";

export default function Login({ onLogin }) {

  const[username,setUsername]=React.useState('');
  const[password,setPassword]=React.useState('');
  const[error,setError]=React.useState('');

  const USERNAME='smily';
  const PASSWORD='battu@08';

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username===USERNAME && password===PASSWORD){
      setError('');
      localStorage.setItem('isLogin','true');
      localStorage.setItem('username',username);
      onLogin();
    }else{
      setError('Invalid username or password');
    }

  };

  return (
    <div className='login-page'>
      <div className='header'>
        <img src={Img} alt="" />
      </div>

      <div className="container mt-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="username" >
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder='Username' required />
            <span><FaUser /></span>
          </div>
          <div className=" password" >
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder='*********' required />
          </div>
          {error && <div className="alert alert-danger py-1">{error}</div>}
          <button type="submit" className="btn btn-primary button">Login</button>
        </form>
      </div>
    </div>
  );
}
