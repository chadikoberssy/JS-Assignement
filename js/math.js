// Function to get diagonal of a square
const getDiagonal = (sideLength) => {
    let diagonal = sideLength * Math.sqrt(2);
    return diagonal;
  };
  
  // Function to get area of a triangle
  const getArea = (side1, side2, side3) => {
    let perimeter = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3));
    return area;
  };
  
  // Function to get circumference of a circle
  const getCircumference = (radius) => {
    let circumference = 2 * Math.PI * radius;
    return circumference;
  };
  
  // Function to get surface area of a circle
  const getSurfaceArea = (radius) => {
    let area = Math.PI * radius ** 2;
    return area;
  };
  
  // Function to get max of 2 integers
  const getMax = (a, b) => {
    let result = a - b;
    if (result > 0) {
      return a + " is bigger than " + b;
    } else if (result < 0) {
      return b + " is bigger than " + a;
    } else {
      return a + " is equal to " + b;
    }
  };
  
  // Function to check if its an even or odd number
  const checkNumber = (x) => {
    if (x % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  };
  
  // Assignment 2
  console.log("Assignment 2 \n");
  console.log("a - Diagonal of square with sides length 9 each is: " + getDiagonal(9));
  console.log("b - Area of a triangle with length sizes 5, 6 and 7 is: " + getArea(5, 6, 7));
  console.log("c - For a circle with radius 4 we have: Circumference = " + getCircumference(4) + " and Surface Area = " + getSurfaceArea(4));
  console.log("\n\n");
  
  // Assignment 3
  console.log("Assignment 3 \n");
  console.log("a - Check max of 2 integers");
  let number1 = prompt("Enter first integer");
  let number2 = prompt("Enter second integer");
  console.log(getMax(number1, number2));
  console.log("b - Check if its an odd number or even number");
  let number = prompt("Enter a number to check it");
  console.log(number + " is an " + checkNumber(number) + " number");
  console.log("\n\n");
  