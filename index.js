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