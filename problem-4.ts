// Problem no - 4:

// Defining the type of Circle
type Circle = {
  shape: "circle";
  radius: number;
};

// Defining the type of Rectangle
type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

// Defining the union type
type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number => {
  // Type Guard for Circle typed Shape
  if (shape.shape === "circle") {
    return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));

    // Type Guard for Rectangle typed Shape
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;

    // If none of two type is passed to the parameter
  } else {
    throw new Error("Unknown shape type");
  }
};
