"use strict";
const num1E = document.getElementById("num1");
const num2E = document.getElementById("num2");
//! ignore null element
const btnEl = document.querySelector("button");
function add(num1, num2) {
    return num1 + num2;
}
btnEl.addEventListener("click", () => {
    const num1 = num1E.value;
    const num2 = num2E.value;
    const result = add(+num1, +num2);
    console.log(result);
});
