function checkEvenOdd() {
    let userInput = prompt("Please enter a number:");
    let number = Number(userInput);
    if (isNaN(number)) {
        alert("Invalid input! Please enter a valid number.");
    } else {
        if (number % 2 === 0) {
            alert("Четное");
        } else {
            alert("Нечетное");
        }
    }
}
window.onload = function () {
    checkEvenOdd();
};