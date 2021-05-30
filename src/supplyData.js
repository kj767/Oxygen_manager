import React, {Component} from 'react';
import {baseUrl} from './baseUrl';
import {Modal} from 'react-bootstrap';
import M from 'materialize-css';
class Supply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supplyin: [],
            supplyout:[],
            interState:[],
            show1: false,
            show2:false,
            plant:'',
            state:'',
            date:'',
            quantity:0,
            incharge:'',
            center:'',
            contact:''
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow1=this.handleShow1.bind(this);
        this.handleShow2=this.handleShow2.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit1=this.handleSubmit1.bind(this);
        this.handleSubmit2=this.handleSubmit2.bind(this);
      
    }
    componentDidMount() {
        console.log('componentDidMount');
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(`${baseUrl}supply/in`, requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log(data);
                    this.setState({supplyin: data})
                    // const rev=data.consultation

                }
            })
            .catch(err=>{
                console.log(err);		
                });
                fetch(`${baseUrl}supply/out`, requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log(data);
                    this.setState({supplyout: data})
                    // const rev=data.consultation

                }
            })
            .catch(err=>{
                console.log(err);		
                });
                fetch(`${baseUrl}supply/interState`, requestOptions)
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        console.log(data.error);
                    } else {
                        console.log(data);
                        this.setState({interState: data})
                        // const rev=data.consultation
    
                    }
                })
                .catch(err=>{
                    console.log(err);		
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
    handleClose(){
           this.setState({
               show1:false,
               show2:false
           }) ;    
    }
    handleShow1(){
        this.setState({
            show1: true
        });
    }
    handleShow2(){
        this.setState({
            show2: true
        });
    }
    handleSubmit1(e){
        console.log("In submit")
        var a=parseInt(this.state.quantity)
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({oxygen_plant: this.state.plant, quantity:a,date:this.state.date, center:this.state.center,incharge:this.state.incharge,contact:this.state.contact})
        };
        fetch(`${baseUrl}supply/in`, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                     M.toast({html: "Enter correct credentials" ,classes:'#c62828 red darken-3'})
                    console.log('Some Error occured');
                } else {
                    //this.props.change();
                    M.toast({html: "Data Saved" ,classes:'#c62828 green darken-3'})
                    window.location.reload();
                }
            })
            .catch(err => {
                //console.log(err);
            })
    }
    handleSubmit2(e){
        console.log("In submit")
        var a=parseInt(this.state.quantity)
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({state: this.state.state, quantity:a,date:this.state.date, center:this.state.center,incharge:this.state.incharge,contact:this.state.contact})
        };
        fetch(`${baseUrl}supply/out`, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                     M.toast({html: "Enter correct credentials" ,classes:'#c62828 red darken-3'})
                    console.log('Some Error occured');
                } else {
                    //this.props.change();
                    M.toast({html: "Data Saved" ,classes:'#c62828 green darken-3'})
                    window.location.reload();
                }
            })
            .catch(err => {
                //console.log(err);
            })
    }
    render() {
        console.log(this.state);
         const supplyInData = this
            .state
            .supplyin
            .map((state) => {
                return (
                    <tr key={state._id}>
                        <td>{state.oxygen_plant}</td>
                        <td>{state.date}</td>
                        <td>{state.quantity}</td>
                        <td>{state.center}</td>
                        <td>{state.incharge}</td>
                        <td>{state.contact}</td>
                    </tr>
                );
            });
            const supplyOutData = this
            .state
            .supplyout
            .map((state) => {
                return (
                    <tr key={state._id}>
                        <td>{state.center}</td>
                        <td>{state.createdAt}</td>
                        <td>{state.quantity}</td>
                        <td>{state.state}</td>
                        <td>{state.incharge}</td>
                        <td>{state.contact}</td>
                    </tr>
                );
            });
            const interStateData = this
            .state
            .interState
            .map((state) => {
                return (
                    <tr key={state._id}>
                        <td>{state.from}</td>
                        <td>{state.to}</td>
                        <td>{state.quantity}</td>
                        <td>{state.createdAt}</td>
                        
                    </tr>
                );
            });
            
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title ">Supply In
                                        <button
                                            className="btn btn-success"
                                            style={{
                                            "position": "relative",
                                            "float": "right"
                                        }}
                                        onClick={this.handleShow1}
                                        >Add Entry</button>
                                    </h4>
                                    <p className="card-category"></p>
                                </div>
                                <div className="card-body">
                                    <div
                                        className="table-responsive"
                                        style={{
                                        "height": "300px",
                                        "overflow": "auto"
                                    }}>
                                        <table class="table">

                                            <thead class="thead" bgcolor="#FFFFFF">

                                                <tr>
                                                    <th scope="col">
                                                        <font color="#0000FF">Oxygen-plant</font>
                                                    </th>
                                                    <th scope="col">
                                                        <font color="#0000FF">Date</font>
                                                    </th>
                                                    <th scope="col">
                                                        <font color="#0000FF">Qauntity</font>
                                                    </th>
                                                    <th scope="col">
                                                        <font color="#0000FF">Delovery-Center</font>
                                                    </th>
                                                    <th scope="col">
                                                        <font color="#0000FF">Incharge</font>
                                                    </th>
                                                    <th scope="col">
                                                        <font color="#0000FF">Contact</font>
                                                    </th>
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
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title ">
                                        Supply Out
                                        <button
                                            className="btn btn-success"
                                            style={{
                                            "position": "relative",
                                            "float": "right"
                                            }}
                                            onClick={this.handleShow2}
                                        >Add Entry</button>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <div
                                        className="table-responsive"
                                        style={{
                                        "height": "300px",
                                        "overflow": "auto"
                                    }}>
                                        <table class="table">

                                            <thead
                                                class="thead"
                                                style={{
                                                "color": "blue",
                                                "fontSize": "20px"
                                            }}>

                                                <tr>

                                                    <th >From Center</th>
                                                    <th >Date</th>
                                                    <th >Qauntity</th>
                                                    <th >To State</th>
                                                    <th >Incharge</th>
                                                    <th >Contact</th>

                                                </tr>

                                            </thead>
                                            <tbody>
                                                {supplyOutData}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    
                
                    <div className="col-md-6">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title ">
                                        Inter State Transfer
                                       
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <div
                                        className="table-responsive"
                                        style={{
                                        "height": "300px",
                                        "overflow": "auto"
                                    }}>
                                        <table class="table">

                                            <thead
                                                class="thead"
                                                style={{
                                                "color": "blue",
                                                "fontSize": "20px"
                                            }}>

                                                <tr>

                                                    <th >From State</th>
                                                    <th >To State</th>
                                                    <th >Qauntity</th>
                                                    <th >Date</th>
                                                    

                                                </tr>

                                            </thead>
                                            <tbody>
                                                {interStateData}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>

                </div>
                <Modal show={this.state.show1} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Supply In </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" className="form-control" name="plant" placeholder="Plant Name.." onChange={this.handleInputChange}/>
            <input type="text" className="form-control" name="date" placeholder="Date.." onChange={this.handleInputChange}/>
            <input type="number" className="form-control" name="quantity" placeholder="Qauntity.." onChange={this.handleInputChange}/>
            <input type="text" className="form-control" name="center" placeholder="Center Name.." onChange={this.handleInputChange}/>
            <input type="text" className="form-control" name="incharge" placeholder="Incharge.." onChange={this.handleInputChange}/>
            <input type="text" className="form-control" name="contact" placeholder="Conatct Number.." onChange={this.handleInputChange}/>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={this.handleClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={this.handleSubmit1}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>


      <Modal show={this.state.show2} onHide={this.handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Supply In </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" className="form-control" name="center" placeholder=" From Center" onChange={this.handleInputChange}/>
             <input type="text" className="form-control" name="date" placeholder="Date.." onChange={this.handleInputChange}/>
            <input type="number" className="form-control" name="quantity" placeholder="Qauntity.." onChange={this.handleInputChange}/>
            <input type="text" className="form-control" name="state" placeholder="To State" onChange={this.handleInputChange}/>
            <input type="text" className="form-control" name="incharge" placeholder="Incharge" onChange={this.handleInputChange}/>
            <input type="text" className="form-control" name="contact" placeholder="Contact" onChange={this.handleInputChange}/>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={this.handleClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={this.handleSubmit2}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
            </div>
            
        );
    }
}

export default Supply;