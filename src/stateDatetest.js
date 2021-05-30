import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import {Modal} from 'react-bootstrap';
import {baseUrl} from './baseUrl';
import M from 'materialize-css';
import 'react-circular-progressbar/dist/styles.css';
class State1 extends Component {
    constructor(props){
      super(props);
      this.state={
        stateData:[],
        search:"",
        show:false,
        from:'',
        to:'',
        quantity:0
      }
      this.handleInputChange=this.handleInputChange.bind(this);
      this.handleClose=this.handleClose.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleShow=this.handleShow.bind(this);
    }
    componentDidMount(){
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json'}
      };
      fetch(`${baseUrl}state/getStateData`,requestOptions)
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
    handleClose(){
      this.setState({
          show:false,
          
      }) ;    
}
    handleShow(){
      this.setState({
       show: true
   });
}
handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
  const name = target.name;
  this.setState({[name]: value});
}
    handleSubmit(e){
      console.log("In submit")
      var a=parseInt(this.state.quantity)
      
      const requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({from:this.state.from,to:this.state.to,quantity:a})
      };
      fetch(`${baseUrl}transferOxygen`, requestOptions)
          .then(res => res.json())
          .then(data => {
              console.log(data);
            
                  //this.props.change();
                  M.toast({html: "Transfer Sucessfull" ,classes:'#c62828 green darken-3'});
                  window.location.reload();
              
          })
          .catch(err => {
              //console.log(err);
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
              <div>
              <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Supply In </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" className="form-control" name="from" placeholder=" From State" onChange={this.handleInputChange} />
             <input type="text" className="form-control" name="to" placeholder="To state" onChange={this.handleInputChange}/>
            <input type="number" className="form-control" name="quantity" placeholder="Qauntity.." onChange={this.handleInputChange}/>
            </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={this.handleClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
              </div>
                <div className="container-fluid" >
                    <div className="row">
                      <div className="col-md-9">
                        <input className="form-contol" name="search" placeholder="Search State ..." onChange={this.handleInputChange}/>
                        </div>
                        <div className="col-md-3">
                          <button className="btn btn-primary" onClick={this.handleShow}>Inter-State Transfer
                          </button>
                        </div>
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
