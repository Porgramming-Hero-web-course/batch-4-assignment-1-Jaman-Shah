// Problem no - 3:

const countWordOccurrences = (sentence: string, word: string): number => {
  // Splitting the whole sentence
  const words = sentence.toLowerCase().split(" ");

  // Making the targeted word lower case
  const targetWord = word.toLowerCase();

  // Counting the targeted word occurrence with the help of filter method
  return words.filter((w) => w === targetWord).length;
};
