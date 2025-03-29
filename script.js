// Sound Effects
const clickSound = new Audio("click.mp3"); // Add a click sound file in your project folder

// Dark Mode Toggle
let isDarkMode = false;
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;
}

// Display Handling
const display = document.getElementById("display");
function pressKey(key) {
  clickSound.play(); // Play sound
  if (display.value === "Error") display.value = ""; // Clear previous error
  display.value += key;
}

// Clear Display
function clearDisplay() {
  clickSound.play();
  display.value = "";
}

// Calculate Result
function calculate() {
  clickSound.play();
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Keyboard Input Support
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    pressKey(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});
