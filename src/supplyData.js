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
                  <h4 className="card-title ">Supply In</h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body">
                  <div className="table-responsive" style={{"height": "300px", "overflow": "auto" }}>
                    <table className="table">
                      <thead className=" text-primary">
                        <th>
                          Oxygen-Plant
                        </th>
                        <th>
                          Date
                        </th>
                        <th>
                          Time
                        </th>
                        <th>Delivery Center</th>
                        <th>

                          Incharge
                        </th>
                        <th>
                          Contact
                        </th>
                        
                      </thead>
                      <tbody >
                        {/* {pendingtable} */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">Supply Out</h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body">
                  <div className="table-responsive" style={{"height": "300px", "overflow": "auto" }}>
                    <table className="table">
                      <thead className=" text-primary">
                        <th>
                          State
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                          Time
                        </th>
                        <th>
                         Center
                        </th>
                        <th>
                          Incharge
                        </th>
                        <th>Contact</th>
                      </thead>
                      <tbody >
                        {/* {pendingtable} */}
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