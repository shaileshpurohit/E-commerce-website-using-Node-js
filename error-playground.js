const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error("Both parameters are required");
};

// solution syncronous error handling
try {
  console.log(sum(2)); // This will throw an error
} catch (error) {
  console.log("Error caught:");
}
console.log(sum(2, 3)); // Expected output: 5
