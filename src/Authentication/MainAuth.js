import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import Login from './Login'
import App from '../App';

const user = JSON.parse(localStorage.getItem("user"));
class Auth extends Component {
    constructor(props) {
        super(props);

        console.log(user);

    }
    render() {
        if (!localStorage.getItem('user')) {
            return (
                <BrowserRouter history={() => createBrowserHistory()}>
                    <div>
                        <Route exact path="/" component={Login}/>
                        

                    </div>

                </BrowserRouter>
            );
        } else if (user) {
            return (

                <BrowserRouter history={() => createBrowserHistory()}>

                    <App/>

                </BrowserRouter>

            );
        }
    }
}

export default Auth;