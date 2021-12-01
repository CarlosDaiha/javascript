var input = prompt();
if (input === "") {
  input = undefined;
}
if (input === undefined) {
  console.log("Error: undefined input");
} else {
  console.log("Continue executing...");
}