const Shape = require("../lib/shapes/shapes");

class Triangle extends Shape {
  constructor(color) {
    super(color){
  `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
}
  }
}
module.exports = Triangle;