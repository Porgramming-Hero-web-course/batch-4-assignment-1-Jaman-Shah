// Problem no - 7:

// Defining a Car class
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge(): number {
    const currentYear = new Date().getFullYear(); // Getting current year
    return currentYear - this.year; // Returning the age
  }
}
