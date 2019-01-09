var numbers = [1, 3, 5, 7, 9, 11];
var current;

for (var i = 0; i < numbers.length / 2; i++) {
 current = numbers[i];
 
 numbers[i] = numbers[numbers.length -1 - i];
 numbers[numbers.length - 1 - i] = current;
}
console.log(numbers);