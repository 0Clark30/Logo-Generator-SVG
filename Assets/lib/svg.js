const shapes = require("./Assets/lib/shapes/shapes");
const circle = require("./Assets/lib/shapes/circle");
const triangle = require("./Assets/lib/shapes/triangle");
const square = require("./Assets/lib/shapes/square");

class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="300"
            height="200"
          >
          </svg>`;
  }
  setTextElement(text, color) {
    `<text
              x="150"
              y="125"
              font-size="60"
              text-anchor="middle"
              fill="${color}"
            >${text}</text>`;
  }
  setShape(color) {
    this.shapeElement = shapes.setColor(color);
  }
}

module.exports = SVG;
