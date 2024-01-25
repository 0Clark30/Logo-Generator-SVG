const fs = require("fs").promises;
const Circle = require("./Assets/lib/shapes/circle");
const Triangle = require("./Assets/lib/shapes/triangle");
const Square = require("./Assets/lib/shapes/square");
const promptUser = require("./Assets/lib/prompts/questions");
// const SVG = require("./Assets/lib/svg");

// const svg = new SVG();
const circle = new Circle();
const triangle = new Triangle();
const square = new Square();
const circleEl = circle.setShape();
const triangleEl = triangle.setShape();
const squareEl = square.setShape();



function init() {
  promptUser().then((response) => {
    const { text, textColor, shape, shapeColor } = response;
    console.log(response);
     if (shape === "Circle") {
       logoShape.replace(`${circleEl} fill="${shapeColor}"/>`);
     } else if (shape === "Triangle") {
       logoShape.replace(`${triangleEl} fill="${shapeColor}"/>`);
     } else {
       logoShape.replace(`${squareEl} fill="${shapeColor}"/>`);
     }
    const logoText = `
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
              <text
              x="150"
              y="125"
              font-size="60"
              text-anchor="middle"
              fill="${textColor}"
            >${text}</text>`;
    let logoShape = "";
    if (shape === "Circle") {
      logoShape.replace(`${circleEl} fill="${shapeColor}"/>`)
    } else if (shape === "Triangle") {
      logoShape.replace(`${triangleEl} fill="${shapeColor}"/>`)
    } else {
      logoShape.replace(`${squareEl} fill="${shapeColor}"/>`);
    }
    const logo = logoText + logoShape + "</svg>";
    console.log(logo)
    fs.writeFile("logo.svg", logo);
  });

}

init();
