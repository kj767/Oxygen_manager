import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {baseUrl} from './baseUrl';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: []
        }
    }
    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        };
        fetch(`${baseUrl}consultantNotification`, requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data.error) {} else {
                    console.log(data);

                    this.setState({notification: data.result})
                }
            })
            .catch(err => {})
    }
    render() {
        const not = this
            .state
            .notification
            .map((not, index) => {

                return (
                    <p key={index}>You have an appointment at {not.startAt}</p>
                )
            })
        return (
            <nav
                className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <a className="navbar-brand" href="#">Home</a>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        aria-controls="navigation-index"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end">
                        {/* <form className="navbar-form">
                  <span className="bmd-form-group"><div className="input-group no-border">
                    <input type="text" value="" className="form-control" placeholder="Search..." />
                    <button type="submit" className="btn btn-white btn-round btn-just-icon">
                      <i className="material-icons">search</i>
                      <div className="ripple-container"></div>
                    </button>
                  </div></span>
                </form> */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="dashboard">
                                    <i className="material-icons">dashboard</i>
                                    <p className="d-lg-none d-md-block">
                                        Stats
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link"
                                    href="http://example.com"
                                    id="navbarDropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="material-icons">notifications</i>
                                    <span className="notification">{this.state.notification.length}</span>
                                    <p className="d-lg-none d-md-block">
                                        Some Actions
                                    </p>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="navbarDropdownMenuLink">
                                    {not}
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link"
                                    href="#"
                                    id="navbarDropdownProfile"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="material-icons">person</i>
                                    <p className="d-lg-none d-md-block">
                                        Account
                                    </p>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="navbarDropdownProfile">
                                    <Link className="dropdown-item" to="/user">Profile</Link>
                                    <a className="dropdown-item" href="#">Settings</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Log out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar;