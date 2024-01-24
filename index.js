const fs = require("fs").promises;
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./Assets/lib/shapes");

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
              fill="white"
            ></text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

inquirer
.prompt([
    {
        type:
        message:
        input:
    }
])
