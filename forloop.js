function insertAtIndex(arr, index, value) {
  if (index < 0 || index > arr.length) {
    throw new Error("Index out of bounds");
  }

  // Use splice to insert the value at the desired index
  arr.splice(index, 0, value);
  return arr;
}
const arr = [1, 2, 3, 4];
const result = insertAtIndex(arr, 2, 99);
console.log(result); 
