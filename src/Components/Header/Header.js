  
import React from 'react';
import {withRouter} from "react-router-dom"
import axios from "axios";
import logo from '../../assets/houser_logo.png';
import './Header.css';

function Header(props) {

  const handleLogout = () =>{
    axios.get("api/logout").then (() => { // leave res empty if you dont need it
      //clear user info on state or reduxState

      //Re-rote user to Auth
      props.history.push("/")
    })
  }

  return (
    <div className='Header'>
      <img src={logo} alt='logo' />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
export default withRouter(header);