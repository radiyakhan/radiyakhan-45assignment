let apple = "apple";
let uppercaseapple = "APPLE";
let ten = 10;
let twenty = 20
let fruits = ["apple", "banana", "orange"];

// testing for equality and inequality with strings
console.log("\napple is equal to apple");
console.log(apple == "apple");

console.log("\napple is not equal to apple")
console.log(apple != "apple");

//test using lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() != "apple");

// numerical tests
//equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

//not equal to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

// greater than
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);

// less than
console.log("\n Is ten is smaller than two?");
console.log(ten < 2);

//greater than or equal to
console.log("\nis ten is greater than or equal to 5?");
console.log(ten >= 5);

//less than or equal to
console.log("\nis twenty is less than or equal to ten?");
console.log(twenty <= 10);

//tests using AND & OR operators
console.log("\n twenty is not equal to ten and twenty is greater than 10");
console.log(twenty != ten && twenty > ten);

console.log("\n twenty is greater than fifty or 20 is equal to 20");
console.log(twenty > 50 || twenty == 20);

console.log("\n twenty is greater than fifty or 20 is not equal to 20");
console.log(twenty > 50 || twenty != 20);

// test whether an item is include in array
console.log("\n Is orange is include in my Fruits array?");
console.log(fruits.includes("orange"));