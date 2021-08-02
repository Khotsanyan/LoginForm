import React, { Component } from "react";
import "./LoginForm.css";
import Input from "./../Input/Input";
import emailValidator from "../../Helpers/EmailValidator";
import nameValidator from "../../Helpers/NameValidator";
import passwordValidator from "../../Helpers/PasswordValidator";
import rePasswordValidator from "../../Helpers/RePasswordValidator";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.emailValidator = emailValidator.bind(this);
    this.nameValidator = nameValidator.bind(this);
    this.passwordValidator = passwordValidator.bind(this);
    this.rePasswordValidator = rePasswordValidator.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      nameError: "",

      surname: "",
      surnameError: "",

      email: "",
      emailError: "",

      password: "",
      passwordError: "",

      rePassword: "",
      rePasswordError: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // const formDataValues = [...formData.keys()];
    console.log([...formData.entries()]);
  }

  render() {
    return (
      <div className="LoginForm">
        <div>
          <h2>LOGIN</h2>
        </div>
        <div className="SurName">
          <Input
            name="name"
            type="text"
            size="small"
            placeholder="Name"
            errorMessage={this.state.nameError}
            onChange={(e) => this.nameValidator(e, "nameError")}
          />
          <Input
            name="surname"
            type="text"
            size="small"
            placeholder="Surname"
            errorMessage={this.state.surnameError}
            onChange={(e) => this.nameValidator(e, "surnameError")}
          />
        </div>

        <Input
          name="email"
          type="text"
          size="big"
          placeholder="exampl@gmail.com"
          errorMessage={this.state.emailError}
          onChange={(e) => this.emailValidator(e, "emailError")}
        />
        <Input
          name="password"
          type="password"
          size="big"
          placeholder="password"
          errorMessage={this.state.passwordError}
          onChange={(e) =>
            this.passwordValidator(e, "passwordError", "password")
          }
        />
        <Input
          name="rePassword"
          type="password"
          size="big"
          placeholder="repeate password"
          errorMessage={this.state.rePasswordError}
          onChange={(e) =>
            this.rePasswordValidator(e, "password", "rePasswordError")
          }
        />
        <div>
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
