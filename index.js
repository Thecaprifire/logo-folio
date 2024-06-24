// Importing necessary modules
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

// Define shape choices
const shapeChoices = ["Circle", "Square", "Triangle"];

// Function to prompt user for text, text color, shape, and shape color
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter text for logo (no more than 3 characters)",
      name: "text",
      validate: (input) => {
        if (input.length > 3) {
          return "You may not enter more than 3 letters!";
        }
        return true;
      },
    },
    {
      type: "list",
      message: "How would you like to enter the text color?",
      name: "textColorChoice",
      choices: ["Color keyword", "Hexadecimal"],
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color",
      when: (answers) => answers.textColorChoice === "Color keyword",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a hexadecimal number (#CCCCCC)",
      when: (answers) => answers.textColorChoice === "Hexadecimal",
    },
    {
      type: "list",
      message: "What shape would you like?",
      name: "chooseShape",
      choices: shapeChoices,
    },
    {
      type: "list",
      message: "How would you like to enter the shape color?",
      name: "shapeColorChoice",
      choices: ["Color keyword", "Hexadecimal"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color",
      when: (answers) => answers.shapeColorChoice === "Color keyword",
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a hexadecimal number (#CCCCCC)",
      when: (answers) => answers.shapeColorChoice === "Hexadecimal",
    },
  ]);
}

// Prompt the user and handle the responses
promptUser().then((answers) => {
  // Mapping the selected shape name to the corresponding class
  const shapeClassMap = {
    Circle,
    Square,
    Triangle,
  };

  // Retrieve the selected shape class from the map
  const ShapeClass = shapeClassMap[answers.chooseShape];

  // Create an instance of the selected shape class with provided colors and text
  const shape = new ShapeClass(
    answers.shapeColor || "#000000", // Default to black if no color is provided
    answers.text,
    answers.textColor || "#000000" // Default to black if no color is provided
  );

  // Render the SVG content for the shape
  const svgContent = shape.render();

  // Write the SVG content to a file named "Logo.svg"
  fs.writeFile("Logo.svg", svgContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Generated logo.svg"); // Print message upon successful file creation
    }
  });
});