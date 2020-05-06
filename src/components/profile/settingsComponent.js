import React, { Component } from "react";
import { Label, Button, Col, Row } from "reactstrap";
import {
  AvForm,
  AvField,
} from "availity-reactstrap-validation";
import user from '../../shared/user.json';

export class SettingsComponent extends Component {
  state = {
    name: "",
    date: "",
    profession: "",
    designation: "",
  };

  basestate = this.state;

  handleChange = (date) => {
    this.setState({
      date: date,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event, values) => {
    event.preventDefault();
   /*  this.setState({
      [event.target.name]: event.target.value,
    }); */
    fetch(user, {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
    this.setState(this.basestate); 
    this.form && this.form.reset();
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.form && this.form.reset();
  };

  render() {
    //const { name, date, profession, designation } = this.state;
    return (
      <div>
        <div className="heading text-center p-md-2">
          <h3>Profile Info</h3>
        </div>
        <div className="form-container p-md-5 p-2">
          <AvForm onValidSubmit={this.handleSubmit} ref={c => (this.form = c)}>
            <Row>
              <Col sm={{ size: 3, offset: 2 }}>
                <Label for="name">Name</Label>
              </Col>
              <Col sm={6}>
                <AvField
                  name="name"
                  id="name"
                  //value={name}
                  placeholder="Enter your name"
                  onChange={this.handleInputChange}
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Field is required",
                    },
                    minLength: { value: 3, errorMessage: "Min is 3" },
                    maxLength: { value: 30, errorMessage: "Max is 30" },
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: 3, offset: 2 }}>
                <Label for="date">DOB</Label>
              </Col>
              <Col sm={6}>
                <AvField
                  name="date"
                  type="text"
                  //value={date}
                  validate={{
                    date: {
                      format: "YYYY/MM/DD",
                    },
                    required: { value: true },
                  }}
                  title="Use MM/DD/YYYY"
                  placeholder="YYYY/MM/DD"
                  onChange={this.handleInputChange}
                />
              </Col>
            </Row>

            <Row>
              <Col sm={{ size: 3, offset: 2 }}>
                <Label for="name">Profession</Label>
              </Col>
              <Col sm={6}>
                <AvField
                  name="profession"
                  id="profession"
                  placeholder="Enter your profession"
                  //value={profession}
                  onChange={this.handleInputChange}
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Field is required",
                    },
                    minLength: { value: 3, errorMessage: "Min is 3" },
                    maxLength: { value: 30, errorMessage: "Max is 30" },
                  }}
                />
              </Col>
            </Row>

            <Row>
              <Col sm={{ size: 3, offset: 2 }}>
                <Label for="name">designation</Label>
              </Col>
              <Col sm={6}>
                <AvField
                  name="designation"
                  id="designation"
                  placeholder="Enter your designation"
                 // value={designation}
                  onChange={this.handleInputChange}
                  validate={{
                    required: {
                      value: true,
                      errorMessage: "Field is required",
                    },
                    minLength: { value: 3, errorMessage: "Min is 3" },
                    maxLength: { value: 30, errorMessage: "Max is 30" },
                  }}
                />
              </Col>
            </Row>
            
              <Row>
                <Button
                  color="danger"
                  className="offset-6"
                  type="reset"
                  onClick={this.handleCancel}
                >
                  Cancel
                </Button>
                <Button 
                  color="success" 
                  className="offset-1 ">
                  Submit
                </Button>
              </Row>
            
          </AvForm>
        </div>
      </div>
    );
  }
}

export default SettingsComponent;
