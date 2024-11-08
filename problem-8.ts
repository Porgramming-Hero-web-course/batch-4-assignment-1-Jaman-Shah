// Problem no - 8:

function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
  return keys.every((key) => Object.prototype.hasOwnProperty.call(obj, key));
}
