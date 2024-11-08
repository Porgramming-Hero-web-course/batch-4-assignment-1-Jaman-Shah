// Problem no - 5:

const getProperty = <T>(obj: T, key: keyof T): T[keyof T] => {
  return obj[key];
};
