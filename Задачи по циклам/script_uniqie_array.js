var numbers = [1, 4, 5, 9, 2, 5, 1];
var uniqueNumbers = [];

for (var i = 0; i < numbers.length; i++) {
 var current = numbers[i];
 var k = 0;
 for (var j = 0; j < numbers.length; j++) {
   if (current === numbers[j]) {
     k++; 
   }
 }
 if (k === 1) {
   uniqueNumbers.push(current);
 }
 }