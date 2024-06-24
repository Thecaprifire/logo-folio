// Define a base class named Shape
class Shape {
    // Constructor to initialize shapeColor, text, and textColor properties
    constructor(shapeColor, text, textColor) {
      this.shapeColor = shapeColor; // Color of the shape
      this.text = text; // Text to be displayed on the shape
      this.textColor = textColor; // Color of the text
    }
  
    // Method to set the text color
    setTextColor(chooseTextColor) {
      this.textColor = chooseTextColor; // Update the text color property
    }
  
    // Method to set the shape color
    setShapeColor(chooseShapeColor) {
      this.shapeColor = chooseShapeColor; // Update the shape color property
    }
  
    // Method to set the text content
    setTextType(chooseText) {
      this.text = chooseText; // Update the text property
    }
  }
  
  // Define a Circle class that extends the Shape class
  class Circle extends Shape {
    // Constructor to initialize Circle-specific properties using the parent class constructor
    constructor(shapeColor, text, textColor) {
      super(shapeColor, text, textColor); // Call the constructor of the parent class (Shape)
    }
  
    // Method to generate an SVG representation of the Circle
    render() {
      // Return the SVG string for a circle with text
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  // Define a Square class that extends the Shape class
  class Square extends Shape {
    // Constructor to initialize Square-specific properties using the parent class constructor
    constructor(shapeColor, text, textColor) {
      super(shapeColor, text, textColor); // Call the constructor of the parent class (Shape)
    }
  
    // Method to generate an SVG representation of the Square
    render() {
      // Return the SVG string for a square with text
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  // Define a Triangle class that extends the Shape class
  class Triangle extends Shape {
    // Constructor to initialize Triangle-specific properties using the parent class constructor
    constructor(shapeColor, text, textColor) {
      super(shapeColor, text, textColor); // Call the constructor of the parent class (Shape)
    }
  
    // Method to generate an SVG representation of the Triangle
    render() {
      // Return the SVG string for a triangle with text
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 250,180 50, 180" fill="${this.shapeColor}" />
        <text x="150" y="155" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  // Export the Circle, Square, and Triangle classes as modules
  module.exports = { Circle, Square, Triangle };