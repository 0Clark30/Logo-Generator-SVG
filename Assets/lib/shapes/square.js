const Shape = require("./shape");

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<polygon points="235,235 164,235 164,164 235,164" />`;
  }
}

module.exports = Square;
