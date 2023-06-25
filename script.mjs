const checkNumber = () => {
  var number = document.getElementById("numberInput").value;
  var resultLabel = document.getElementById("resultLabel");

  if (isNaN(number) || number == '') {
    resultLabel.textContent = "Please enter a valid number.";
    return;
  }

  if (number % 2 === 0) {
    resultLabel.textContent = "The number is even.";
  } else {
    resultLabel.textContent = "The number is odd.";
  }
};
document.getElementById("btnCheck").addEventListener("click", checkNumber);