import React, { Component } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
class State extends Component {
    state = {  }
    render() { 
        const percentage=60;
        return ( 
            <div className="content">
                <div className="container-fluid" >
                    <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-primary card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>New Delhi</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={10} text={`${10}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: 'red',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 	'red',
                    // Text size
                    fontSize: '20px',
                    fontWeight: 'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright", "color":"#283747"}}>Available</h4>
                  <h5 style={{"fontFamily":"Copperplate","position":"relative","float":"right","color":"#283747"}}>100</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Maharashtra</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
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
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>900</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Karnataka</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={55} text={`${55}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>550</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Kerala</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={30} text={`${30}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>300</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Uttar Pradesh</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={60} text={`${60}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>600</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-info card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Tamil Nadu</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={60} text={`${60}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>600</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-dark card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Andhra Pradesh</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={77} text={`${77}%`}
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
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>770</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-primary card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>West Bengal</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={25} text={`${25}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: 'red',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 	'red',
                    // Text size
                    fontSize: '20px',
                    fontWeight: 'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright", "color":"#283747"}}>Available</h4>
                  <h5 style={{"fontFamily":"Copperplate","position":"relative","float":"right","color":"#283747"}}>250</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-secondary card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Chhattisgarh</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={47} text={`${47}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>470</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Rajasthan</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={68} text={`${68}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>680</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Haryana</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={50} text={`${50}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>500</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Jharkand</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={15} text={`${15}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `red`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'red',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>150</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-info card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Odisha</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={40} text={`${40}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>400</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-dark card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Punjab</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={53} text={`${53}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>530</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-primary card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Telangana</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={70} text={`${70}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: 'orange',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 	'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight: 'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright", "color":"#283747"}}>Available</h4>
                  <h5 style={{"fontFamily":"Copperplate","position":"relative","float":"right","color":"#283747"}}>700</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-secondary card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Madhya Pradesh</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
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
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>900</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Mizoram</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={85} text={`${85}%`}
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
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>850</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Sikkim</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={80} text={`${80}%`}
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
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>800</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Bihar</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={60} text={`${60}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>600</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-info card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Uttarakhand</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={78} text={`${78}%`}
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
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>780</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-dark card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Assam</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={87} text={`${87}%`}
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
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>870</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-primary card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Gujarat</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={10} text={`${10}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: 'red',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 	'red',
                    // Text size
                    fontSize: '20px',
                    fontWeight: 'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright", "color":"#283747"}}>Available</h4>
                  <h5 style={{"fontFamily":"Copperplate","position":"relative","float":"right","color":"#283747"}}>100</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-secondary card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Arunachal Pradesh</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
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
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>900</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Jammu and Kashmir</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={55} text={`${55}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>550</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Goa</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={30} text={`${30}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>300</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Manipur</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={60} text={`${60}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>600</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-info card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Himachal Pradesh</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={60} text={`${60}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>600</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-dark card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Tripura</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={77} text={`${77}%`}
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
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>770</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-primary card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Puducherry</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={10} text={`${10}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: 'red',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 	'red',
                    // Text size
                    fontSize: '20px',
                    fontWeight: 'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright", "color":"#283747"}}>Available</h4>
                  <h5 style={{"fontFamily":"Copperplate","position":"relative","float":"right","color":"#283747"}}>100</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-secondary card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Ladakh</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
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
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>900</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Nagaland</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={55} text={`${55}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>550</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Meghalaya</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={30} text={`${30}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>300</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Chandigarh</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={60} text={`${60}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>600</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-info card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Daman and Diu</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={60} text={`${60}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: `orange`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 'orange',
                    // Text size
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>600</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>
                    

                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-dark card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>Lakshadweep</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Lucida Bright","fontWeight":"bolder"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Copperplate"}}>1000</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={77} text={`${77}%`}
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
                    fontSize: '20px',
                    fontWeight:'bold',
                  },
                }}
                />
                
                </div>
                </div>

                <div className="col-md-6">
                  <p style={{"position":"relative","float":"right","marginRight":"0"}}> 
                  <h4 style={{"fontFamily":"Lucida Bright","color":"#283747"}}>Available</h4>
                  <h5 style={{"position":"relative","float":"right","fontFamily":"Copperplate","color":"#283747"}}>770</h5>
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
