// Importing necessary modules
const inquire = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

// Define shape choices
const shapeChoices = ["Circle", "Square", "Triangle"];
// Define color keywords for easy selection
const colorKeyWords = [
  "Black",
  "Blue",
  "Green",
  "Indigo",
  "Orange",
  "Red",
  "Violet",
  "White",
  "Yellow",
];

// Prompt the user with a series of questions
inquire
  .prompt([
    {
      // Prompt to choose a shape
      type: "list",
      message: "What shape would you like?",
      name: "chooseShape",
      choices: shapeChoices,
    },
    {
      // Prompt to choose the color format for the shape
      type: "list",
      message: "What color would you like the shape to be? Choose color format:",
      name: "shapeColorChoice",
      choices: ["color keyword", "hexadecimal"],
    },
    {
      // Prompt to enter a color keyword for the shape
      type: "list",
      name: "shapeColor",
      message: "Enter the color keyword",
      choices: colorKeyWords,
      when: (answers) => answers.shapeColorChoice === "color keyword",
      validate: (answer) => {
        let answerLowerCase = answer.toLowerCase();
        for (let color of colorKeyWords) {
          if (answerLowerCase.indexOf(color.toLowerCase()) !== -1) {
            return true;
          }
        }
        return "Please enter a valid color keyword";
      },
    },
    {
      // Prompt to enter a hexadecimal color code for the shape
      type: "input",
      name: "shapeColor",
      message: "Enter a hexadecimal number (#CCCCCC)",
      when: (answers) => answers.shapeColorChoice === "hexadecimal",
    },
    {
      // Prompt to choose the color format for the text
      type: "list",
      message: "What color would you like the text to be? Choose color format:",
      name: "textColorChoice",
      choices: ["color keyword", "hexadecimal"],
    },
    {
      // Prompt to enter a color keyword for the text
      type: "list",
      name: "textColor",
      message: "Enter the color keyword",
      choices: colorKeyWords,
      when: (answers) => answers.textColorChoice === "color keyword",
      validate: (answer) => {
        let answerLowerCase = answer.toLowerCase();
        for (let color of colorKeyWords) {
          if (answerLowerCase.indexOf(color.toLowerCase()) !== -1) {
            return true;
          }
        }
        return "Please enter a valid color keyword";
      },
    },
    {
      // Prompt to enter a hexadecimal color code for the text
      type: "input",
      name: "textColor",
      message: "Enter a hexadecimal number (#CCCCCC)",
      when: (answers) => answers.textColorChoice === "hexadecimal",
    },
    {
      // Prompt to enter text to be displayed inside the shape
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
  ])
  .then((answers) => {
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
      answers.shapeColor,
      answers.text,
      answers.textColor
    );

    // Render the SVG content for the shape
    const svgContent = shape.render();

    // Write the SVG content to a file named "Logo.svg"
    fs.writeFile("Logo.svg", svgContent, (err) =>
      err
        ? console.error(err)
        : console.log("SVG Logo & file created successfully!")
    );
  });