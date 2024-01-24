const Shape = require("../lib/shapes/shapes");


class Square extends Shape {
  constructor(color) {
    super(color)
     render(){
  `<polygon points="235,235 164,235 164,164 235,164"  fill="${this.color}" />`
}
  }
}

module.exports = Square;