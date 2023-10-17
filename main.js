"use strict";

const passInput = document.querySelector(".input");
const bar = document.querySelector(".bar");
const strengthLevel = document.querySelector(".strength-level");

function checkStrength(str) {
  // Regular Expressions
  const regex = [
    /[a-z]/, // true
    /[A-Z]/, // true
    /[0-9]/, // false
    /[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]/, // false
  ];
  // [false, true, false, true] // [true, true] // 2

  const strength = regex
    .map((re) => re.test(str))
    .filter((power) => power === true).length;

  return strength;
}

passInput.addEventListener("input", function (e) {
  const strength = checkStrength(e.target.value);

  if (strength === 0) {
    bar.style.width = 0;
    strengthLevel.textContent = "Weak";
  }

  if (strength === 1) {
    bar.style.width = "25%";
    bar.style.backgroundColor = "red";
    strengthLevel.textContent = "Not good enough!";
  }

  if (strength === 2) {
    bar.style.width = "50%";
    bar.style.backgroundColor = "orange";
    strengthLevel.textContent = "Not bad";
  }

  if (strength === 3) {
    bar.style.width = "75%";
    bar.style.backgroundColor = "yellow";
    strengthLevel.textContent = "Keep going ...";
  }

  if (strength === 4) {
    bar.style.width = "100%";
    bar.style.backgroundColor = "green";
    strengthLevel.textContent = "Great!";
  }
});
