import React, { Component } from 'react';

class Supply extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">Supply In
                  <button type="button" class="btn btn-light float-right"><font color="#0000FF">Add field</font></button>
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
      <th scope="col"><font color="#0000FF">Time</font></th>
      <th scope="col"><font color="#0000FF">Delovery-Center</font></th>
      <th scope="col"><font color="#0000FF">Incharge</font></th>
      <th scope="col"><font color="#0000FF">Contact</font></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Chennai</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Shimla</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
    <tr>
      <td class="abc">Chennai</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Jalandhar</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
    <tr>
      <td>Bangalore</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Ambala</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
    <tr>
      <td>Delhi</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Dehradun</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
    <tr>
      <td>Baddi</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Jaipur</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
    <tr>
      <td>Chennai</td>
      <td>26-05-2021</td>
      <td>09:30</td>
      <td>Lucknow</td>
      <td>ABCD</td>
      <td>9736178898</td>
    </tr>
    <tr>
      <td>Bangalore</td>
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
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">
                    Supply Out
                    <button type="button" class="btn btn-light float-right"><font color="#0000FF">Add field</font></button>
                    </h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive" style={{"height": "300px", "overflow": "auto" }}>
                  <table class="table">
  <thead class="thead" bgcolor="#FFFFFF">
    <tr>
      <th scope="col"><font color="#0000FF">State</font></th>
      <th scope="col"><font color="#0000FF">Date</font></th>
      <th scope="col"><font color="#0000FF">Time</font></th>
      <th scope="col"><font color="#0000FF">Center</font></th>
      <th scope="col"><font color="#0000FF">Incharge</font></th>
      <th scope="col"><font color="#0000FF">Contact</font></th>
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
