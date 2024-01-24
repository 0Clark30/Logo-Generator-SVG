const fs = require("fs").promises;
const shapes = require("./Assets/lib/shapes/shape");
const promptUser = require("./Assets/lib/prompts/questions");
const SVG = require("./Assets/lib/svg");

promptUser().then((response) => {
  const { text, textColor, shape, shapeColor } = response;
  if (shape === "Circle") {
  }
});
