function swapNumbers(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
  }
  
  let num1 = 5;
  let num2 = 10;
  
  console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
  
  [num1, num2] = swapNumbers(num1, num2);
  
  console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);
  