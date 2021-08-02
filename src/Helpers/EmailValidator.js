export default function emailValidator(e, stateErrorName) {
  const emailInput = e.target.value;
  const emailValidatorRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (!emailValidatorRegex.test(emailInput)) {
    this.setState({ [stateErrorName]: "invalid email" });
    return;
  }
  this.setState({ [stateErrorName]: "" });
}
