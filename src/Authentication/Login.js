import React, {Component} from 'react';
import {baseUrl} from '../baseUrl';
import {Form, Button} from "react-bootstrap";
import "./Login.css";
import M from 'materialize-css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleInputChange = this
            .handleInputChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleDef = this
            .handleDef
            .bind(this);
        this.validateForm = this
            .validateForm
            .bind(this);
    }

    handleDef(event) {
        event.preventDefault();
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit(e) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({password: this.state.password, email: this.state.email})
        };
        fetch(`${baseUrl}users/login`, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                     M.toast({html: "Enter correct credentials" ,classes:'#c62828 red darken-3'})
                    console.log('Some Error occured');
                } else {
                    //this.props.change();
                    localStorage.setItem("jwt", data.token);
                    console.log(data.user);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    window.location = '/dashboard';
                }
            })
            .catch(err => {
                //console.log(err);
            })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    render() {
        console.log(this.state);
        return (
            <div className="Login">
                <h1 style={{"fontFamily":"Montserrat"},{"alignSelf":"center"},{"textAlign":"center"}}>Medical Oxygen Management System</h1>
                <br></br><br></br><br></br>
                <Form onSubmit={this.handleDef}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            className='form-comtrol'
                            name='email'
                            placeholder='Enter email'
                            onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            className='form-comtrol'
                            name='password'
                            placeholder='Enter Password'
                            onChange={this.handleInputChange}/>
                    </Form.Group>
                    <Button
                        block
                        className="loginbtn"
                        size="lg"
                        type="submit"
                        onClick={this.handleSubmit}
                        disabled={!this.validateForm()}>
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Login;