const CORRECT_PIN = "123456";
let enteredPin = "";

function pressKey(num) {
  if (enteredPin.length >= 6) return;
  enteredPin += num.toString();
  updateDots();
}

function clearPin() {
  enteredPin = enteredPin.slice(0, -1);
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll("#pin-dots span");
  dots.forEach((dot, index) => {
    dot.classList.toggle("filled", index < enteredPin.length);
  });
}

function submitPin() {
  if (enteredPin === CORRECT_PIN) {
    window.location.href = "profile.html";
  } else {
    shake();
    enteredPin = "";
    updateDots();
  }
}

function shake() {
  const container = document.querySelector(".container");
  container.style.animation = "shake 0.3s";
  setTimeout(() => (container.style.animation = ""), 300);
}
