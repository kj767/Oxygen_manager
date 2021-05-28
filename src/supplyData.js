import React, { Component } from 'react';
import {baseUrl} from './baseUrl';
class Supply extends Component {
    constructor(props){
      super(props);
      this.state={
        supplyin:[]
      }

    }
      componentDidMount(){
        console.log('componentDidMount');
          const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'} 
      };
      fetch(`${baseUrl}/supply/in`,requestOptions)
      .then(res=>res.json())
      .then(data=>{
      if(data.error){			
      	console.log(data.error);
      }	
      else{
        console.log(data);
        this.setState({
          supplyin:data
        })
        // const rev=data.consultation
      	
      	}
      })
    
        }
    render() {
      const supplyInData=this.state.supplyin.map((state)=>{
        return(
        <tr key={state._id}>
      <td>{state.oxygen_plant}</td>
      <td>{state.date}</td>
      <td>{state.quantity}</td>
      <td>{state.center}</td>
      <td>{state.incharge}</td>
      <td>{state.contact}</td>
    </tr>    
        );
      }) 
        return ( 
            <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">Supply In
                  <button className="btn btn-success" style={{"position":"relative" ,"float":"right"}}>Add Entry</button>
                  </h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body">
                  <div className="table-responsive" style={{"height": "300px", "overflow": "auto" }}>
                    <table class="table">

                    <thead class="thead" bgcolor="#FFFFFF">

                    

                      <tr>
                        <th scope="col"><font color="#0000FF">Oxygen-plant</font></th>
                        <th scope="col"><font color="#0000FF">Date</font></th>
                        <th scope="col"><font color="#0000FF">Qauntity</font></th>
                        <th scope="col"><font color="#0000FF">Delovery-Center</font></th>
                        <th scope="col"><font color="#0000FF">Incharge</font></th>
                        <th scope="col"><font color="#0000FF">Contact</font></th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplyInData}
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">
                    Supply Out
                    <button className="btn btn-success" style={{"position":"relative" ,"float":"right"}}>Add Entry</button>
                    </h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive" style={{"height": "300px", "overflow": "auto" }}>
                  <table class="table">
  

                  <thead class="thead" style={{"color":"blue","fontSize":"20px"}}>
                    
    <tr>
      
      <th >State</th>
      <th >Date</th>
      <th >Time</th>
      <th >Center</th>
      <th >Incharge</th>
      <th >Contact</th>
      
    </tr>
  
  </thead>
  <tbody>
    <tr>
      <td>Himachal Pradesh</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Shimla</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
    <tr>
      <td>Punjab</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Jalandhar</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
    <tr>
      <td>Haryana</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Ambala</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
    <tr>
      <td>Utrakhand</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Dehradun</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
    <tr>
      <td>Rajasthan</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Jaipur</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
    <tr>
      <td>Uttar Pradesh</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Lucknow</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
    <tr>
      <td>Madhya Pradesh</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Indore</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
  </tbody>
</table>
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
 
export default Supply;