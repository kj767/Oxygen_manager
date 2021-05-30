import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {baseUrl} from './baseUrl';
import {Line, Bar} from 'react-chartjs-2';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: []
        }

    }
    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(`http://localhost:5000/dashboard/getDashboardDetails`, requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data.error) {} else {
                    console.log(data);
                    this.setState({dashboard: data[0]})
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        console.log(this.state.dashboard.allocated);

        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-success card-header-icon">
                                    <div className="card-icon">
                                        <i className="material-icons">store</i>
                                    </div>
                                    <p className="card-category">Total Available Supplies</p>
                                    <h3
                                        className="card-title"
                                        style={{
                                        "fontFamily": "Montserrat"
                                    }}>{this.state.dashboard.available}{' MT'}

                                    </h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">date_range</i>
                                        <Link to="supply">Check Here</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-danger card-header-icon">
                                    <div className="card-icon">
                                        <i className="material-icons">content_copy</i>
                                    </div>
                                    <p className="card-category">Urgent Requirement</p>
                                    <h3
                                        className="card-title"
                                        style={{
                                        "fontFamily": "Montserrat"
                                    }}>{this.state.dashboard.requirment}{' MT'}</h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">date_range</i>
                                        <Link to="supply">Check Here to ask from Plant</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-success card-header-icon">
                                    <div className="card-icon">
                                        <i className="material-icons">cloud_done</i>
                                    </div>
                                    <p className="card-category">Supplied</p>
                                    <h3
                                        className="card-title"
                                        style={{
                                        "fontFamily": "Montserrat"
                                    }}>{this.state.dashboard.allocated}{" MT"}</h3>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">date_range</i>
                                        Last 24 Hours
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                                <div className="card-header card-header-danger card-header-icon">
                                    <div className="card-icon">
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p className="card-category">Death Due to Shortage</p>
                                    <h3
                                        className="card-title"
                                        style={{
                                        "fontFamily": "Montserrat"
                                    }}>{this.state.dashboard.inprocess}</h3>

                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">date_range</i>
                                        Last 24 Hours
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-chart">
                                <div className="card-header card-header-success">
                                    <div className="ct-chart" id="dailySalesChart"></div>
                                    <Line
                                        data={{
                                        labels: [
                                            'Jan', 'Feb', 'Mar', 'Apr', 'May'
                                        ],
                                        datasets: [
                                            {
                                                label: '',
                                                data: [
                                                    65,
                                                    59,
                                                    80,
                                                    81,
                                                    56,
                                                    55,
                                                    40
                                                ],
                                                fill: false,
                                                borderColor: 'green',
                                                tension: 0
                                            }
                                        ]
                                    }}
                                        options={{
                                        maintainAspectRatio: true
                                    }}/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Oxygen Supplied</h4>
                                    <p className="card-category">
                                        <span className="text-success">
                                            <i className="fa fa-long-arrow-up"></i>
                                            55%
                                        </span>
                                        in the last month.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">access_time</i>
                                        updated 4 minutes ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-chart">
                                <div className="card-header card-header-warning">
                                    <div className="ct-chart" id="websiteViewsChart"></div>
                                    <Line
                                        data={{
                                        labels: [
                                            'Jan', 'Feb', 'Mar', 'Apr', 'May'
                                        ],
                                        datasets: [
                                            {
                                                label: '',
                                                data: [
                                                    65,
                                                    59,
                                                    80,
                                                    81,
                                                    56,
                                                    55,
                                                    40
                                                ],
                                                fill: false,
                                                borderColor: 'gold',
                                                tension: 0
                                            }
                                        ]
                                    }}
                                        options={{
                                        maintainAspectRatio: true
                                    }}/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Oxygen Consumed</h4>
                                    <p className="card-category">Per State in 24 Hours</p>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">access_time</i>
                                        campaign sent 2 days ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-chart">
                                <div className="card-header card-header-info">
                                    <div className="ct-chart" id="completedTasksChart"></div>
                                    <Bar
                                        data={{
                                        labels: [
                                            'Jan', 'Feb', 'Mar', 'Apr', 'May'
                                        ],
                                        datasets: [
                                            {
                                                label: 'My First Dataset',
                                                data: [
                                                    65,
                                                    59,
                                                    80,
                                                    81,
                                                    56,
                                                    55,
                                                    40
                                                ],
                                                backgroundColor: [
                                                    'rgba(255, 99, 132, 0.2)',
                                                    'rgba(255, 159, 64, 0.2)',
                                                    'rgba(255, 205, 86, 0.2)',
                                                    'rgba(75, 192, 192, 0.2)',
                                                    'rgba(54, 162, 235, 0.2)',
                                                    'rgba(153, 102, 255, 0.2)',
                                                    'rgba(201, 203, 207, 0.2)'
                                                ],
                                                borderColor: [
                                                    'rgb(255, 99, 132)',
                                                    'rgb(255, 159, 64)',
                                                    'rgb(255, 205, 86)',
                                                    'rgb(75, 192, 192)',
                                                    'rgb(54, 162, 235)',
                                                    'rgb(153, 102, 255)',
                                                    'rgb(201, 203, 207)'
                                                ],
                                                borderWidth: 1
                                            }
                                        ]
                                    }}
                                        options={{
                                        maintainAspectRatio: true
                                    }}/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Deaths Due to Oxygen Shortage</h4>
                                    <p className="card-category">In the last month</p>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">access_time</i>
                                        campaign sent 2 days ago
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

export default Dashboard;