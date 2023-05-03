const myButton = document.getElementById("palindromeCheck");
const messageElement = document.getElementById("message");

myButton.addEventListener("click", function () {
    const enteredText = document.getElementById("formGroupExampleInput").value;
    const string = enteredText.toString();
    if (string == string.split('').reverse().join('')) {
        console.log(string + ' is palindrome.');
        messageElement.textContent = string + ' is Palindrome.';
    }
    else {
        messageElement.textContent = string + ' is NOT a Palindrome.';
    }
});