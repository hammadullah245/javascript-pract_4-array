// Sample array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let highest = numbers[0];
let lowest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > highest) {
        highest = numbers[i];
        // console.log(numbers[i]);
        console.log(highest);
    }
    if (numbers[i] < lowest) {
        lowest = numbers[i];
    }
}

// Print the highest and lowest numbers
console.log("Highest number: " + highest);
console.log("Lowest number: " + lowest);
