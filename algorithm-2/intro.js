let smallestNumber = Infinity
let numbers = [23, 23, 23, 23, 23]
for (let num of numbers) {

    if (num < smallestNumber) {
        smallestNumber = num
    }
}
console.log("Smallest number is " + smallestNumber)