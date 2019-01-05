var numbers = [2, 4, 7, 4, 7, 2];
var number = 4;
var lastIndex ;

for (var i = numbers.length-1; i > 0; i--) {
  if (number == numbers[i]) {
   lastIndex = i; 
   break;
  } else{
   lastIndex = -1; 
  }
}
console.log(lastIndex);