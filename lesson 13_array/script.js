let options = {
    width: 1024,
    height: 768,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length);

let arr = [1, 2, 3, 4, 5];
arr.pop(); //delete last item
arr.push("5"); //add last item
arr.shift(); //delete first item
arr.unshift("1"); // add first item

console.log(arr);

let arr = ["first", 2, 3, "four", 5];

// arr[99] = 99;
// console.log(arr.length);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach(function(item, i, mass) {
    console.log(i + ": " + item + " (массив: " + mass + ")");
});

// take numbers of items array

let mass = [1, 3, 4, 6, 7];

for (let key in mass) {
    console.log(key);
}

//take values of items array

let mass = [1, 3, 4, 6, 7];

for (let key of mass) {
    console.log(key);
}

//split array by strings

let ans = prompt("", ""),
arr = [];

arr = ans.split(",");
console.log(arr);

//join array to one string

let arr = ["aaa", "zzz", "ppp", "rrr"],
i = arr.join(", ");

console.log(i);

//sort array item

let arr = [1, 15, 4],
i = arr.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}

console.log(arr);