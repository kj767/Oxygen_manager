import React, {Component} from 'react';
import Sidebar from './Sidebar';
import MainPanel from './MainPanel';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <BrowserRouter>
                    <React.Fragment>
                        <Sidebar/>
                        <MainPanel/>
                    </React.Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
