export default function rePasswordValidator(
  e,
  statePassword,
  stateRePasswordError
) {
  const rePasswordInput = e.target.value;
  if (this.state[statePassword] !== rePasswordInput) {
    this.setState({ [stateRePasswordError]: "passwords don't much" });
    console.log(this.state[statePassword], "value from state");
    console.log(rePasswordInput, "value from input");
    return;
  }
  this.setState({ [stateRePasswordError]: "" });
}
