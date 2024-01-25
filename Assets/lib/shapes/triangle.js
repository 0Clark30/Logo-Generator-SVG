const Shape = require("./shape");

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" `;
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
}
module.exports = Triangle;
