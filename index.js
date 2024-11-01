function reverseString() {
    const inputString= document.getElementById("inputString").value;
    const string_len= inputString.length;
    let reverse = "";
    for (let index = string_len-1; index >= 0; index--) {
        reverse = reverse + inputString[index];     
    }   
    document.getElementById("reverseResult").innerText = `Reversed: ${reverse}`;
}

function checkPalindrome() {
    const inputPalindrome = document.getElementById("inputPalindrome").value;
    const string_len= inputPalindrome.length;
    let isPalindrome = true;
    for (let index = 0; index < string_len/2; index++) {
        
        if (inputPalindrome[index] != inputPalindrome[string_len-index-1]) {
            isPalindrome=false;
            break;
        }  
    }   
    
    
    document.getElementById("palindromeResult").innerText = isPalindrome? "It is a palindrome.": "It is not a palindrome.";
}

function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        document.getElementById("totalResult").innerText = "Please enter valid numbers.";
        return;
    }
    const tipAmount = (subtotal * tipPercentage) / 100;
    const totalAmount = subtotal + tipAmount;
    document.getElementById("totalResult").innerText = `Total: $${totalAmount.toFixed(2)}`;
}
