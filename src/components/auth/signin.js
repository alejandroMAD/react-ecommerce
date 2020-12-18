import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

class SignIn extends Component {
  render() {
    return (
      <div className="sign-in">
        <h1>Sign In</h1>
        <h1>Sign In</h1>
      </div>
    );
  }
}

SignIn = reduxForm({
  form: "SignIn"
})(SignIn);

export default SignIn;
