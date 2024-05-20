class UserDefinedError extends Error {
  message() {
    return "Argument is not a number";
  }
}

module.exports = {
  add: (a, b) => {
    if (typeof a != "number") {
      throw new UserDefinedError("first argument is not type of number");
    }
    if (typeof b != "number") {
      throw new UserDefinedError("second argument is not type of number");
    }
    return a + b;
  },
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b
}