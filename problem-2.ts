// Problem no - 2:

const removeDuplicates = (numbers: number[]): number[] => {
  const uniqueNumbers: number[] = [];

  // forEach method for loop through all the numbers
  numbers.forEach((num) => {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num);
    }
  });
  return uniqueNumbers;
};
