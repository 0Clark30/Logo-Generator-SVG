const Shape = require("./shape");

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  setShape() {
    return `<circle cx="150" cy="100" r="80"`;
  }
}
module.exports = Circle;
