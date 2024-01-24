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
              fill="${color}"
            >${text}</text>`;
  }
  setShape(color) {
    this.shapeElement = shape.setColor(color);
  }
}

inquirer
.prompt([
    {
        type:"input",
        message:"Type 3 Characters for your Logo ((no more than 3) ex. 'TLC')",
        input: "text"
    }
    {
        type: "input",
        message: "What text color do you want for the Characters in your Logo (use color name or hexadecimal number)?",
        input:"textColor"
    }
    {
        type: "List",
        message: "Choose a shape for your Logo:",
        input:"shape",
        choices: [
            "Circle",
            "Triangle",
            "Square"
        ]
    }
    {
        type: "input",
        message: "What color do you want for your shape (use color name or hexadecimal number)?",
        input:"shapeColor"
    }
])
.then((response) => {
    const { text, textColor, shape, shapeColor} = response;
    if (shape === 'Circle'){
        render();
        setTextElement(text, textColor) 
    }

})
