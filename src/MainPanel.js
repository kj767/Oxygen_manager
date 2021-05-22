import React, { Component } from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

class MainPanel extends Component {
    
    render() { 
        return ( 
            <div className="main-panel">
                
                <Navbar />
                <Content />
                {/* <Footer /> */}
                
            </div>
         );
    }
}
 
export default MainPanel;