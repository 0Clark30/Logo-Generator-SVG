const Shape = require("./shape");

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill `;
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
}
module.exports = Circle;
