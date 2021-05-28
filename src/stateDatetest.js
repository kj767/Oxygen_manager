import React, { Component } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
class State1 extends Component {
    constructor(props){
      super(props);
      this.state={
        stateData:[],
        search:"",
      }
      this.handleInputChange=this.handleInputChange.bind(this);
    }
    componentDidMount(){
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json'}
      };
      fetch(`http://localhost:5000/state/getStateData`,requestOptions)
      .then(res=>res.json())
      .then(data=>{
      if(data.error){			
      
      }	
      else{
        console.log(data);
        this.setState({
            stateData:data
        })
      }
      })
      .catch(err=>{
      console.log(err);		
      });
    }
    handleInputChange(e){
        console.log(e.target.value);
        this.setState({
            search:e.target.value
        })
    }
    render() { 
        console.log(this.state);
        const display=this.state.stateData.map((state)=>{
          const value=(state.available/state.allocated)*100;
          const prc = (Math.round(value * 100) / 100).toFixed(2);
          const color =(value<=25?'#df4759': (value>=25 && value <=75 ?  ' #eed202':'green'));
            return(
            <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>{state.name}</p>
                      </div>
                      <h3 className="card-category" style={{"fontFamily":"Montserrat"}}>Alloted Supplies</h3>
                      <h3 className="card-title" style={{"fontFamily":"Montserrat"}}>{state.allocated}{' MT'}</h3>
                    </div>
                    <div className="card-footer">
                     
                      
                          <div className="col-md-6">
                      <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                      <CircularProgressbar value={prc} text={`${prc}%`}
                styles={{
                  path: {
                    // Path color
                    stroke: color,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Rotate the path
                    
                    transformOrigin: 'center center',
                  },
                  text: {
                    // Text color
                    fill: 	color,
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
                  <h4 style={{"fontFamily":"Montserrat", "position":"relative","float":"right"}}>Available</h4>
                  <h5 style={{"fontFamily":"Montserrat","position":"relative","float":"right"}}>{state.available}{' MT'}</h5>
                  </p>
                </div>
                </div>
                      </div>
                    
                 
                </div>

          );
        })
        const filtered=this.state.stateData.map((state)=>{
            const value=(state.available/state.allocated)*100;
            const prc = (Math.round(value * 100) / 100).toFixed(2);
            console.log(prc);
            const color =(value<=25?'#df4759': (value>=25 && value <=75 ?  ' #eed202':'green'));
            if(state.name.toLowerCase().includes(this.state.search)){
              return(
              <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header card-header-success card-header-icon">
                        <div className="card-icon">
                          <p style={{"fontWeight":"bolder","color":"#F8F9F9"}}>{state.name}</p>
                        </div>
                        <h3 className="card-category" style={{"fontFamily":"Montserrat"}}>Alloted Supplies</h3>
                        <h3 className="card-title" style={{"fontFamily":"Montserrat"}}>{state.allocated}{' MT'}</h3>
                      </div>
                      <div className="card-footer">
                       
                        
                            <div className="col-md-6">
                        <div style={{"height":"100px","width":"100px","padding":"7px"}} >
                        <CircularProgressbar value={prc} text={`${prc}%`}
                  styles={{
                    path: {
                      // Path color
                      stroke: color,
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'round',
                      // Customize transition animation
                      transition: 'stroke-dashoffset 0.5s ease 0s',
                      // Rotate the path
                      
                      transformOrigin: 'center center',
                    },
                    text: {
                      // Text color
                      fill: 	color,
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
                    <h4 style={{"fontFamily":"Montserrat", "position":"relative","float":"right"}}>Available</h4>
                    <h5 style={{"fontFamily":"Montserrat","position":"relative","float":"right"}}>{state.available}{' MT'}</h5>
                    </p>
                  </div>
                  </div>
                        </div>
                      
                   
                  </div>
  
            );
                }
          });
          
        return ( 
            <div className="content">
                <div className="container-fluid" >
                    <div className="row">
                        <input className="form-contol" name="search" placeholder="Enter State" onChange={this.handleInputChange}/>
                    </div>
                    <div className="row">
                        
                        {this.state.search?filtered:display}
                                </div>
                </div>
                </div>
        );
}
}
 
export default State1;
