const Shape = require("./shape");

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  setShape() {
   return `<polygon points="150, 18 244, 182 56, 182" `;
  }
}
module.exports = Triangle;
