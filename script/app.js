function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}
function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}
document.getElementById("btn-generate").addEventListener("click", function () {
  const pin = getPin();
  const displayPin = document.getElementById("display-pin");
  displayPin.value = pin;
});

document.getElementById("calculator").addEventListener("click", function (e) {
  const number = e.target.innerText;
  const typedNumberField = document.getElementById("typed-numbers");
  const previousTypedNumber = typedNumberField.value;
  if (isNaN(number)) {
    if (number === "C") {
      typedNumberField.value = "";
    } else if (number === "<") {
      const digits = previousTypedNumber.split("");
      digits.pop();
      const remainingDigits = digits.join("");
      typedNumberField.value = remainingDigits;
    }
  } else {
    newTypedNumber = previousTypedNumber + number;
    typedNumberField.value = newTypedNumber;
  }
});
document.getElementById("button-submit").addEventListener("click", function () {
  const typedPinField = document.getElementById("typed-numbers");
  const typedPin = typedPinField.value;

  const currentPinField = document.getElementById("display-pin");
  const currentPin = currentPinField.value;

  const successMessage = document.getElementById("success-message");
  const failMessage = document.getElementById("fail-message");

  if (typedPin == currentPin) {
    successMessage.style.display = "block";
    failMessage.style.display = "none";
  } else {
    failMessage.style.display = "block";
    successMessage.style.display = "none";
    const leftMessageField = document.getElementById("left-message");
    const leftMessageString = leftMessageField.innerText;
    const leftMessage = parseInt(leftMessageString);
    const newLeftMessage = leftMessage - 1;
    leftMessageField.innerText = newLeftMessage;
  }
});
