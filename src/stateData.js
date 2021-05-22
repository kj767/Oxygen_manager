import React, { Component } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
class State extends Component {
    state = {  }
    render() { 
        const percentage=60;
        return ( 
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <p>New Delhi</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"montserrat"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"montserrat"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={10} text={`${10}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: '#df4759',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 	'#df4759',
                    // Text size
                    fontSize: '18px',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"montserrat"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right"}}>100</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <p>Maharashtra</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"montserrat"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"montserrat"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={90} text={`${90}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `green`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'green',
                    // Text size
                    fontSize: '18px',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"montserrat"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right"}}>900</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    
                
                </div>
                </div>
            </div>
         );
    }
}
 
export default State;