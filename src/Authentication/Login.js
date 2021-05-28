import React, { Component } from 'react';
import {baseUrl }from '../baseUrl';
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                    password:this.state.password,
                    email:this.state.email})
        };
        fetch(`${baseUrl}/users/login`,requestOptions)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.error){
                   // M.toast({html: "Invalid Password " ,classes:'#c62828 red darken-3'})
                   console.log('Some Error occured');			
                }	
                else{
                    
                    //this.props.change();
                    localStorage.setItem("jwt",data.token);
                    console.log(data.user);
                    localStorage.setItem("user",JSON.stringify(data.user));
                    
                    window.location='/dashboard';
                    
                }
            })
            .catch(err=>{
                //console.log(err);		
            })
    }

    handleInputChange(event){
        const target =event.target;
        const value=target.type==='checkbox' ?target.checked : target.value;
        const name=target.name;
        this.setState({
                [name]: value
        });
      }

    render() { 
        console.log(this.state);
        return ( 
            <div className='content'>
                <div className='container-fluid'>
                    <input type="text" className='form-comtrol' name='email' placeholder='Enter email' onChange={this.handleInputChange}/>
                    <input type="text" className='form-comtrol' name='password' placeholder='Enter Password' onChange={this.handleInputChange}/>
                    <button className="btn btn-primary" onClick={this.handleSubmit} >Login</button>
                </div>
            </div>
         );
    }
}
 
export default Login;