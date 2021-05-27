import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import State from './stateData';
import Supply from './supplyData';
import State1 from './stateDatetest';
class Content extends Component {
    
    render() { 
        return ( 
            <>
                <Route exact path="/" component={Dashboard} /> 
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/demand" component={State1} /> 
                <Route path="/supply" component={Supply} />
                {/* <Route path="/user" component={User}/>
                <Route path="/bookings" component={Bookings}/>
                <Route path="/account" component={Account}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/wallet" component={Wallet}/>
                <Route path="/withdraw" component={Withdr0000000aw} /> */}
                
            </>
         );
    }
}
 
export default Content;