// 1. Write a JavaScript program to display the current day and time in the following format.
// function currentDay() {
//     let day = new Date();
//     let today = day.toLocaleString("default", {weekday: "long"})

//     let time = new Date();
//     let currentTime = time.toLocaleString('en-us', { hour: 'numeric', minute: 'numeric', hour12: true})

//     return `Today is ${today}, and the current time is ${currentTime}`
// }

// console.log(currentDay())

//2. Write a JavaScript program to print the contents of the current window.
// function printWindow() {
//     window.print();
// }

// console.log(printWindow())

//3. Write a JavaScript function that reverse a number.
// function reverseNumber(n) {
//     return parseInt(n.toString().split("").reverse().join(""))
// }

// console.log(reverseNumber(675))

//4. Write a JavaScript function that checks whether a passed string is palindrome or not?
// function palindrome(str) {
//     let rStr = str.split("").reverse().join("")
//     if (str === rStr) {
//         return 'It is a palindrome!'
//     } else {
//         return 'It is not a palindrome :('
//     }
// }

// console.log(palindrome('justalongstringtomakesureitworks'))
// console.log(palindrome('racecar'))

//5. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// function alphabetical(str) {
//     return str.split('').sort().join('')
// }
// console.log(alphabetical('hello'))

//6. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
// function upperCase(str) {
//     let words = str.split(" ")
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1)
//     }
//     return words.join(" ")
// }
// console.log(upperCase("hello my name is billy"))

//7. Write a function that if returns y/yes returns true, or if it returns n/no returns false.
// function yesOrNo(str) {
//     if (str === 'y' || str === 'yes') {
//         return true;
//     } else if (str === 'n' || str === 'no') {
//         return false;
//     }
//     else return "Invalid answer";
// }
// console.log(yesOrNo('n'))


// 8. Write a JavaScript program that accept two integers and display the larger.
// function biggest(a, b) {
//     if (a > b) {
//         return a
//     } else if (a < b) {
//         return b
//     } else if (a === b) {
//         return 'they are equal'
//     }
// }
// console.log(biggest(70, 70))

//9. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
function loopEvenAndOdd() {
    for (let i = 0; i < 16; i++) {
        if (i % 2 === 0) {
            console.log(`Number is ${i} and even`)
        }
        else {
            console.log(`Number is ${i} and false`)
        }
    }
    return;
}
console.log(loopEvenAndOdd())