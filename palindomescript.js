const myButton = document.getElementById("palindromeCheck");
const messageElement = document.getElementById("message");

myButton.addEventListener("click", function () {
    const enteredText = document.getElementById("formGroupExampleInput").value;
    if (enteredText.length == 0) {
        messageElement.textContent = "Please enter the Text/Number first.";
        messageElement.style.color = "red";
    }
    else {
        const string = enteredText.toString();
        if (string == string.split('').reverse().join('')) {
            console.log(string + ' is palindrome.');
            messageElement.textContent = string + ' is Palindrome!';
            messageElement.style.color = "green";
        }
        else {
            messageElement.textContent = string + ' is NOT a Palindrome!';
            messageElement.style.color = "#2A2F4F";
        }
    }
});