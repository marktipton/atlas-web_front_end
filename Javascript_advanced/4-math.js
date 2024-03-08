function divideBy(firstNumber, secondNumber) {
  return (secondNumber/firstNumber);
}

function addBy(firstNumber) {
  return function(secondNumber) {
    return (firstNumber + secondNumber);
  }
}