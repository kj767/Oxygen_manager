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
        fetch(`${baseUrl}dashboard/getDashboardDetails`, requestOptions)
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
                                        <i className="material-icons">donut_large</i>
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
                                        <i className="material-icons">local_hospital</i>
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
                                            'Jun-20',  'Jul-20','Aug-20','Sep-20','Oct-20','Nov-20','Dec-20','Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21'
                                        ],
                                        datasets: [
                                            {
                                                label: 'Supplied',
                                                data: [
                                                    83,
                                                    90,
                                                    81,
                                                    75,
                                                    73,
                                                    70,
                                                    68,
                                                    65,
                                                    68,
                                                    71,
                                                    75,
                                                    79

                                                ],
                                                fill: false,
                                                borderColor: 'white',
                                                tension: 0,
                                                pointBorderWidth:2.5
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
                                    <Bar
                                        data={{
                                        labels: [
                                            'Jun-20',  'Jul-20','Aug-20','Sep-20','Oct-20','Nov-20','Dec-20','Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21'
                                        ],
                                        datasets: [
                                            {
                                                label: 'Consumed',
                                                data: [
                                                    63,
                                                    70,
                                                    61,
                                                    55,
                                                    53,
                                                    50,
                                                    48,
                                                    45,
                                                    68,
                                                    71,
                                                    75,
                                                    79
                                                ],
                                                backgroundColor: [
                                                    'white',
                                                    'white',
                                                    'white',
                                                    'white',
                                                    'white',
                                                    'white',
                                                ],
                                                borderColor: [
                                                    'white',
                                                    'white',
                                                    'white',
                                                    'white',
                                                    'white',
                                                    'white',
                                                    
                                                ],
                                                borderWidth: 1,
                                                barThickness:20

                                            }
                                        ]
                                    }}
                                        options={{
                                        maintainAspectRatio: true
                                    }}/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Oxygen Consumed</h4>
                                    <p className="card-category">Per Month</p>
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
                                <div className="card-header card-header-danger">
                                    <div className="ct-chart" id="completedTasksChart"></div>
                                    <Line
                                        data={{
                                        labels: [
                                            'Jun-20',  'Jul-20','Aug-20','Sep-20','Oct-20','Nov-20','Dec-20','Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21'
                                        ],
                                        datasets: [
                                            {
                                                label: 'Deaths',
                                                data: [
                                                    28,
                                                    26,
                                                    24,
                                                    20,
                                                    18,
                                                    16,14,12,15,20,30,40
                                                ],
                                                fill: false,
                                                borderColor: 'white',
                                                tension: 0,
                                                pointBorderWidth:2.5
                                            }
                                        ]
                                    }}
                                        options={{
                                        maintainAspectRatio: true
                                    }}/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Deaths Due to Oxygen Shortage</h4>
                                    <p className="card-category">Per Month Data</p>
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