const Shape = require("../lib/shapes/shapes");

class Circle extends Shape {
  constructor(color) {
    super(color) {
       `<circle cx="150 cy="100 r="80" fill= "${this.color}"`
    }
  }
}
module.exports = Circle;