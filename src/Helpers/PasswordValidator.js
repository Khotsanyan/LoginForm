export default function passwordValidator(
  e,
  statePasswordError,
  statePassword
) {
  const passwordInput = e.target.value;
  const passRegex = /(?=^.{8,}$)/;

  if (!passRegex.test(passwordInput)) {
    this.setState({ [statePasswordError]: "password is not valid" });
    return;
  }
  this.setState({ [statePasswordError]: "" });
  this.setState({ [statePassword]: passwordInput });
}
