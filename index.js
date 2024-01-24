const fs = require('fs').promises
const Circle = require("./Assets/lib/shapes/circle");
const Triangle = require("./Assets/lib/shapes/triangle");
const Square = require("./Assets/lib/shapes/square");
const promptUser = require("./Assets/lib/prompts/questions");
const SVG = require("./Assets/lib/svg");

const svg = new SVG();
const circle = new Circle();
const triangle = new Triangle();
const square = new Square();

function init(){
promptUser().then((response) => {
  const { text, textColor, shape, shapeColor } = response;
 console.log(response)
 const logoText = `
 ${svg.render()}
 ${svg.setTextElement(text, textColor)}
 `
   let logoShape = "";
   if (shape === "Circle") {
     logoShape = circle.setShape(shapeColor);
   } else if (shape === "Triangle") {
     logoShape = triangle.setShape(shapeColor);
   } else {
     logoShape = square.setShape(shapeColor);
   }
   const logo = `${logoText} + ${logoShape}`
   writeFile("logo.svg", logo);
})



writeFile('logo.svg', logo);

}



init()
