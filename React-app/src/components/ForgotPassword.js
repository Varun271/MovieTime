import React from "react";
import Button from "react-bootstrap/Button";

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitClicked: false,
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Please Enter your Email address";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Entered Email Address is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  submit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Password reset email has been sent to you.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div className="container">
        <form
          className="form"
          name="contactform"
          onSubmit={this.submit.bind(this)}
        >
          <br />
          <h1>FORGOT PASSWORD</h1>
          <br />
          <h3>Enter Your Email Address :</h3>
          <div className="form-group">
            <fieldset>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
              <br />
              <br />
              <Button type="submit" id="submit">
                Submit
              </Button>
            </fieldset>
          </div>
        </form>
      </div>
    );
  }
}
