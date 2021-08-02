export default function nameValidator(e, stateName) {
  const nameInput = e.target.value;
  if (nameInput === "") {
    this.setState({ [stateName]: "input is empty" });
    return;
  }
  this.setState({ [stateName]: "" });
}
