let number = prompt("Введите число от 3 и до бесконечности");
let numb = number

let array = [];

    for (let i = 2; i < number; i++) {
        
        for (let j = i; j < number; j++) {
            if (numb%i == 0) { 
                numb = numb/i;
                array.push(i);    
            }
        }
    }

    alert("Введенное число: " + number + " раскладывается на множители: " + array);
