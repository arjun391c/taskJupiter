import React, { Component } from "react";

import { Label, Button, Col, Row } from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

export class HomeComponent extends Component {
  render() {
    return (
      <div>
        {this.props.isLogged ? (
          <div className="heading text-center p-md-2">
            <h3>Hey you are logged in!!</h3>
          </div>
        ) : (
          <>
            <div className="heading text-center p-md-2">
              <h3>Log in</h3>
            </div>
            <div className="form-container p-md-5 p-2">
              <AvForm
                onValidSubmit={this.handleSubmit}
                ref={(c) => (this.form = c)}
              >
                <Row>
                  <Col sm={{ size: 3, offset: 2 }}>
                    <Label for="name">Name</Label>
                  </Col>
                  <Col sm={6}>
                    <AvField
                      name="name"
                      id="name"
                      value={"User"}
                      placeholder="Enter your name"
                      // onChange={this.handleInputChange}
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
                    <Label for="name">Password</Label>
                  </Col>
                  <Col sm={6}>
                    <AvField
                      name="profession"
                      id="profession"
                      placeholder="Enter your profession"
                      type="password"
                      value={"password"}
                      //  onChange={this.handleInputChange}
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
                    color="success"
                    className="offset-9"
                    onClick={this.props.toggleLogged}
                  >
                    Login
                  </Button>
                </Row>
              </AvForm>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default HomeComponent;
