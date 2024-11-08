## 1. The significance of union and intersection types in Typescript.

-------------------------- Union Type --------------------------
Union and Intersection types are important features in TypeScript that help ensure type safety in our code.

Union types allow a variable to be one of several possible types, denoted by the "|" symbol

> > Features of Union type

1. A variable with a union type can only use methods and properties that exist on all of its constituent types. If it tries to access a property that doesn't exist on one of them, TypeScript will throw a compile-time error.

2.We can perform conditional checks at runtime to determine which type a union value currently holds using the typeof operator or other custom logic.

As example:
const address: string | number;
address = 'xyz23';
address = 536;

In this case, address can either be a string or a number. This is useful when we have multiple functions with different parameter types but similar functionality.

------------------------- Intersection Type --------------------

Intersection types combine multiple types into one, denoted by the "&" symbol.

> > Features of Intersection Type:

1. An intersection type combines the structure of two or more types into a single type. Any variables declared with an intersection type must satisfy all of the constraints imposed by each individual type.

2. Intersection types are commonly used to define objects that need to implement multiple interfaces or extend multiple classes.

3. Intersection types can also be combined with union types to represent complex data structures that may contain values from multiple sources with differing types.

As Example:

interface User {
name: string;
}

interface Admin {
role: string;
}

let userAdmin: User & Admin = {
name: 'John Doe',
role: 'admin'
};

In this case, userAdmin has both the properties of User and Admin. This is useful when we want to create an object that needs to conform to multiple interfaces.
