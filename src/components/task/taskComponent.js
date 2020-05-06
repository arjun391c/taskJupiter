import React, { Component } from "react";
import { Input, FormGroup, Label, Form, Button } from "reactstrap";

class TaskComponent extends Component {
  state={
    sourcename: "",
    login: false,
    sql: "",
    result: ""
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { sourcename, login , sql ,result} = this.state;
    return (
      <div>
        <div className="heading text-center p-md-2">
          <h3>Taks_1</h3>
        </div>
        <div className="form-container p-md-5 p-2">
          <Form className="mx-3">
            <div className="row-content">
              <FormGroup className="row offset-sm-1">
                <Label for="name" className="col-sm-3 ">
                  Source Name
                </Label>
                <Input type="select" name="sourcename" id="sourcename" placeholder={sourcename} className="col-sm-4 offset-sm-3" onChange={this.handleInputChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </div>
            <div className="row-content">
              <FormGroup className="row offset-sm-1">
                <Label for="login" className="col-3 ">
                  Enable Logging
                </Label>
                <div className="col-4 offset-3 mt-2">
                <Input type="checkbox" value={login} name="login" id="login" className="col-sm-4 offset-sm-3" bsSize="sm" onChange={this.handleInputChange}/>
                </div>
              </FormGroup>
            </div>
            <div className="row-content">
              <FormGroup className="row offset-sm-1">
                <Label for="sql" className="col-sm-3 ">
                  Provide SQL
                </Label>
                <Input
                  className="col-sm-4 offset-sm-3"
                  type="textarea"
                  value={sql}
                  name="sql"
                  id="sql"
                  placeholder="Provide SQL Here"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </div>
            <div className="row-content">
              <FormGroup className="row offset-sm-1">
                <Label for="result" className="col-sm-3 ">
                  Target Result
                </Label>
                <Input type="select" name="result" id="result" placeholder={result} className="col-sm-4 offset-sm-3" onChange={this.handleInputChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </div>
            <div className="row-content">
              <Button color="danger" className="offset-sm-5 offset-2">Cancel</Button>
              <Button color="success" className="offset-1">Submit</Button>
              <Button color="primary" className="offset-1">Validate</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default TaskComponent;
