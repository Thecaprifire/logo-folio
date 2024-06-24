// Define a class called Shape
class Shape {
    // Constructor initializing 'color' property
    constructor() {
        this.color = ''; // Initialize 'color' to an empty string
    }

    // Method to set the 'color' property
    setColor(color) {
        this.color = color; // Set the 'color' to the given value
    }
}

// Define a Circle class that extends Shape
class Circle extends Shape {
    // Method to render an SVG Circle element
    render() {
        // Return an SVG circle element with position, size, and fill color
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`;
    }
}

// Define a Square class that extends Shape
class Square extends Shape {
    // Method to render an SVG Square element
    render() {
        // Return an SVG rectangle element representing a square with position, size, and fill color
        return `<rect x="50" height="200" width="200" fill="${this.color}">`;
    }
}

// Define a Triangle (Polygon) class that extends Shape
class Triangle extends Shape {
    // Method to render an SVG Triangle (Polygon) element
    render() {
        // Return an SVG polygon element representing a triangle with position, size, and fill color
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`;
    }
}

// Export the Circle, Square, and Triangle classes
module.exports = { Circle, Square, Triangle };