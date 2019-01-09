var numbers = [3, 5, 15, 6, 2, 1];

for (var i = 0; i < numbers.length; i++) {

    for (var j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[i]) {
            var swap = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = swap;
        }
    }
}
console.log(numbers);