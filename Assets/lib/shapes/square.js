const Shape = require("./shape");

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<polygon points="235,235 164,235 164,164 235,164" fill ="${this.color}"/>`;
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
}

module.exports = Square;
