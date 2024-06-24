// Import the required shape classes from the shapes module
const { Circle, Square, Triangle } = require("./shapes");

// Test the Circle's setTextColor method
test("Circle set text color method test", () => {
  const circle = new Circle(); // Create a new Circle instance
  circle.setTextColor("red"); // Set the text color of the circle to red
  expect(circle.textColor).toEqual("red"); // Verify if the text color was set correctly
});

// Test the Circle's setShapeColor method
test("Circle set shape color method test", () => {
  const circle = new Circle(); // Create a new Circle instance
  circle.setShapeColor("blue"); // Set the shape color of the circle to blue
  expect(circle.shapeColor).toEqual("blue"); // Verify if the shape color was set correctly
});

// Test the Circle's setTextType method
test("Circle set text type method test", () => {
  const circle = new Circle(); // Create a new Circle instance
  circle.setTextType("ABC"); // Set the text type of the circle to "ABC"
  expect(circle.text).toEqual("ABC"); // Verify if the text type was set correctly
});

// Test the Circle's render method
test("Circle render shape", () => {
  // Create a new Circle instance with specific colors and text
  const circle = new Circle("red", "ABC", "violet");
  // Define the expected SVG output
  const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="red" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="violet">ABC</text> </svg>`;
  // Verify if the rendered SVG matches the expected output
  expect(circle.render()).toEqual(svg);
});

// Test the Square's setTextColor method
test("Square set text color method test", () => {
  const square = new Square(); // Create a new Square instance
  square.setTextColor("red"); // Set the text color of the square to red
  expect(square.textColor).toEqual("red"); // Verify if the text color was set correctly
});

// Test the Square's setShapeColor method
test("Square set shape color method test", () => {
  const square = new Square(); // Create a new Square instance
  square.setShapeColor("blue"); // Set the shape color of the square to blue
  expect(square.shapeColor).toEqual("blue"); // Verify if the shape color was set correctly
});

// Test the Square's setTextType method
test("Square set text type method test", () => {
  const square = new Square(); // Create a new Square instance
  square.setTextType("ABC"); // Set the text type of the square to "ABC"
  expect(square.text).toEqual("ABC"); // Verify if the text type was set correctly
});

// Test the Square's render method
test("Square render shape", () => {
  // Create a new Square instance with specific colors and text
  const square = new Square("green", "ABC", "white");
  // Define the expected SVG output
  const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="50" y="50" width="200" height="200" fill="green" /> <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">ABC</text> </svg>`;
  // Verify if the rendered SVG matches the expected output
  expect(square.render()).toEqual(svg);
});

// Test the Triangle's setTextColor method
test("Triangle set text color method test", () => {
  const triangle = new Triangle(); // Create a new Triangle instance
  triangle.setTextColor("red"); // Set the text color of the triangle to red
  expect(triangle.textColor).toEqual("red"); // Verify if the text color was set correctly
});

// Test the Triangle's setShapeColor method
test("Triangle set shape color method test", () => {
  const triangle = new Triangle(); // Create a new Triangle instance
  triangle.setShapeColor("blue"); // Set the shape color of the triangle to blue
  expect(triangle.shapeColor).toEqual("blue"); // Verify if the shape color was set correctly
});

// Test the Triangle's setTextType method
test("Triangle set text type method test", () => {
  const triangle = new Triangle(); // Create a new Triangle instance
  triangle.setTextType("ABC"); // Set the text type of the triangle to "ABC"
  expect(triangle.text).toEqual("ABC"); // Verify if the text type was set correctly
});

// Test the Triangle's render method
test("Triangle render shape", () => {
  // Create a new Triangle instance with specific colors and text
  const triangle = new Triangle("blue", "ABC", "black");
  // Define the expected SVG output
  const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150,20 250,180 50, 180" fill="blue" /> <text x="150" y="155" font-size="50" text-anchor="middle" fill="black">ABC</text> </svg>`;
  // Verify if the rendered SVG matches the expected output
  expect(triangle.render()).toEqual(svg);
});