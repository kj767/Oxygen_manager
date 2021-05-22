import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Nav } from 'reactstrap';
class Sidebar extends Component {
  constructor(props){
    super(props);
    
  }
    render() { 
        return ( 
            <div className="sidebar" data-color="orange" data-background-color="white" data-image="assets/img/sidebar-1.jpg">
    
      <div className="logo"><a href="#" className="simple-text logo-normal">
          Center 
        </a></div>
      <div className="sidebar-wrapper">
        <Nav >
          <li className="nav-item ">
            <Link className="nav-link" to="/dashboard" >
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-item " >
            <Link className="nav-link" to="/demand" >
              <i className="material-icons">person</i>
              <p>State Requirment</p>
            </Link>
          </li>
           <li className="nav-item ">
            <Link className="nav-link" to="/supply">
              <i className="material-icons">content_paste</i>
              <p>Supplies</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/account">
              <i className="material-icons">assignment_turned_in</i>
              <p>Account Verification</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/settings">
              <i className="material-icons">settings</i>
              <p>Settings</p>
            </Link>
          </li>
          
          {/*<li className="nav-item ">
            <a className="nav-link" href="./notifications.html">
              <i className="material-icons">notifications</i>
              <p>Notifications</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./rtl.html">
              <i className="material-icons">language</i>
              <p>RTL Support</p>
            </a>
          </li>*/}
          <li className="nav-item active-pro ">
            <a className="nav-link" href="#">
              <i className="material-icons">unarchive</i>
              <button className="btn btn-primary" onClick={() => {
                localStorage.clear()
                window.location='/signin'
              }}  >Log Out</button>
            </a>
          </li> 
        </Nav>
      </div>
    </div>
         );
    }
}
 
export default Sidebar;