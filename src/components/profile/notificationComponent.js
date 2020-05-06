import React, { Component } from 'react';
import { FormGroup, Form, Label,  Button } from 'reactstrap';
import Switch from "react-switch";

export class NotificationComponent extends Component {
    
    state={
        allalert: true,
        alertsuccess: false,
        alertfailed: true,
        alertoff: false
    }

    handleCheck = (event) =>{
        console.log(event);
        this.setState({
            allalert: event
        })
    }
    render() {
        return (
            <div>
                <div className="heading text-center p-md-2">
                    <h3>Notification</h3>
                </div>
                <div className="form-container p-md-5 p-2">
                    <Form >
                        <div className="row-content mt-5">
                            <FormGroup className="row offset-1">
                                <Label for="allalerts" className="col-5 ">Send all alerts</Label>
                                <Switch onChange={this.handleCheck} 
                                        checked={this.state.allalert} 
                                        height={40}
                                        width={100} 
                                        onColor="#3390FF"
                                        className="col-5 offset-1"                                       
                                        />
                            </FormGroup>
                        </div>
                        <div className="row-content mt-5">
                            <FormGroup className="row offset-1">
                                <Label for="allalerts" className="col-5 ">Alerts only task success</Label>
                                <Switch onChange={this.handleCheck} 
                                        checked={this.state.alertsuccess} 
                                        height={40}
                                        width={100} 
                                        onColor="#3390FF"
                                        className="col-5 offset-1"                                       
                                        />
                            </FormGroup>
                        </div>
                        <div className="row-content mt-5">
                            <FormGroup className="row offset-1">
                                <Label for="allalerts" className="col-5 ">Alerts only for failed tasks</Label>
                                <Switch onChange={this.handleCheck} 
                                        checked={this.state.alertfailed} 
                                        height={40}
                                        width={100} 
                                        onColor="#3390FF"
                                        className="col-5 offset-1"                                       
                                        />
                            </FormGroup>
                        </div>
                        <div className="row-content mt-5">
                            <FormGroup className="row offset-1">
                                <Label for="allalerts" className="col-5 ">I do not want any alerts</Label>
                                <Switch onChange={this.handleCheck} 
                                        checked={this.state.alertoff} 
                                        height={40}
                                        width={100} 
                                        onColor="#3390FF"
                                        className="col-5 offset-1"                                       
                                        />
                            </FormGroup>
                        </div>
                        
                        <div className="buttons row mt-5 row-content justify-content-center ">
                            <Button className="offset-md-3" color="danger" >Cancel</Button>
                            <Button className="offset-1" color="success" >Submit</Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default NotificationComponent
