function decimalToBinary(num) {
  //Write you code here
  if (num === 0) {
    return '0'; // Special case: If the input is 0, the binary representation is '0'.
  }

  let binary = ''; // Initialize an empty string to store the binary representation.

  while (num > 0) {
    const remainder = num % 2; // Calculate the remainder when dividing by 2.
    binary = remainder + binary; // Prepend the remainder to the binary string.
    num = Math.floor(num / 2); // Update num by integer division.
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;
