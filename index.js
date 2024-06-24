// Importing required modules
const filesystem = require('./node_modules/graceful-fs/graceful-fs'); // Import graceful-fs for file system operations
const inquirer = require("inquirer"); // Import inquirer for user input prompts
const { Circle, Square, Triangle } = require("./lib/shapes"); // Import Circle, Square, and Triangle classes from shapes module

// Defines a Svg class for creating and rendering SVG elements
class Svg {
    constructor() {
        this.textElement = ''; // Initialize textElement property
        this.shapeElement = ''; // Initialize shapeElement property
    }
    // Method to render the SVG string
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    // Method to set the text element in the SVG
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    // Method to set the shape element in the SVG
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

// Defines array of 'questions' using the 'inquirer' library
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:", // Prompt for text input
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):", // Prompt for text color input
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):", // Prompt for shape color input
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?", // Prompt for shape selection
        choices: ["Circle", "Square", "Triangle"], // List of shape choices
    },
];

// Function to write data to a file
function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]"); // Log the data being written to the file
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err); // Log any error that occurs
        }
        console.log("Congratulations, you have Generated a logo.svg!"); // Log success message
    });
}

// Async function to initialize the application
async function init() {
    console.log("Starting init"); // Log the start of the initialization

    var svgString = ""; // Initialize svgString variable
    var svg_file = "logo.svg"; // Define the output file name

    // Prompt the user for answers
    const answers = await inquirer.prompt(questions);

    // Validate and set user text input
    var user_text = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        user_text = answers.text; // Valid text entry (1-3 characters)
    } else {
        console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
        return; // Exit if the text input is invalid
    }
    console.log("User text: [" + user_text + "]"); // Log the user text input

    // Set user font color
    user_font_color = answers["text-color"];
    console.log("User font color: [" + user_font_color + "]"); // Log the user font color input

    // Set user shape color
    user_shape_color = answers.shape;
    console.log("User shape color: [" + user_shape_color + "]"); // Log the user shape color input

    // Set user shape type
    user_shape_type = answers["pixel-image"];
    console.log("User entered shape = [" + user_shape_type + "]"); // Log the user shape type input

    // Determine the user shape based on the input
    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
        console.log("User selected Square shape"); // Log selection of Square shape
    }
    else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
        console.log("User selected Circle shape"); // Log selection of Circle shape
    }
    else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
        user_shape = new Triangle();
        console.log("User selected Triangle shape"); // Log selection of Triangle shape
    }
    else {
        console.log("Invalid shape!"); // Log invalid shape selection
    }

    // Set the color of the user shape
    user_shape.setColor(user_shape_color);

    // Create a new Svg instance and add the shape and text elements to it
    var svg = new Svg();
    svg.setTextElement(user_text, user_font_color); // Set the text element
    svg.setShapeElement(user_shape); // Set the shape element
    svgString = svg.render(); // Render the SVG string

    // Log the generated SVG string
    console.log("Displaying shape:\n\n" + svgString);

    // Log completion of shape generation
    console.log("Shape generation complete!");
    console.log("Writing shape to file...");

    // Write the SVG string to the file
    writeToFile(svg_file, svgString);
}

// Initialize the application
init();