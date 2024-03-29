const fs = require("fs").promises;
const Circle = require("./Assets/lib/shapes/circle");
const Triangle = require("./Assets/lib/shapes/triangle");
const Square = require("./Assets/lib/shapes/square");
const promptUser = require("./Assets/lib/prompts/questions");

const circle = new Circle();
const triangle = new Triangle();
const square = new Square();
const circleEl = circle.render();
const triangleEl = triangle.render();
const squareEl = square.render();

function init() {
  promptUser().then((response) => {
    const { text, textColor, shape, shapeColor } = response;
    console.log(response);
    let logoShape = "";
    if (shape === "Circle") {
      logoShape = `${circleEl} fill="${shapeColor}"/>`;
    } else if (shape === "Triangle") {
      logoShape = `${triangleEl} fill="${shapeColor}"/>`;
    } else {
      logoShape = `${squareEl} fill="${shapeColor}"/>`;
    }
    const svgEl = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">`;
    const logoText = `
            
              <text x="150" y="125" font-size="55" text-anchor="middle" fill="${textColor}" >${text}</text>`;

    const logo = `${svgEl} ${logoShape} ${logoText}  </svg>`;
    console.log(logo);
    fs.writeFile("logo.svg", logo);
  });
}

init();
