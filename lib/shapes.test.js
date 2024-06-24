// Import the Circle, Square, and Triangle shape classes from the 'shapes.js' module
const { Circle, Square, Triangle } = require("./shapes");

// Define a test suite for the Circle shape class
describe('Circle', () => {
    // Define a test case to check if the Circle object renders correctly
    test('renders correctly', () => {
        // Create a new instance of the Circle class
        const shape = new Circle();
        // Set the color for the Circle
        var color = 'blue';
        // Call the setColor method to set the color of the Circle
        shape.setColor(color);
        // Assert that the rendered SVG string matches the expected value
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

// Define a test suite for the Square shape class
describe('Square', () => {
    // Define a test case to check if the Square object renders correctly
    test('renders correctly', () => {
        // Create a new instance of the Square class
        const shape = new Square();
        // Set the color for the Square
        var color = 'green';
        // Call the setColor method to set the color of the Square
        shape.setColor(color);
        // Assert that the rendered SVG string matches the expected value
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});

// Define a test suite for the Triangle shape class
describe('Triangle', () => {
    // Define a test case to check if the Triangle object renders correctly
    test('renders correctly', () => {
        // Create a new instance of the Triangle class
        const shape = new Triangle();
        // Set the color for the Triangle
        var color = 'pink';
        // Call the setColor method to set the color of the Triangle
        shape.setColor(color);
        // Assert that the rendered SVG string matches the expected value
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});