// if (2*4 == 7){
//     console.log("True");
// } else{
//     console.log("False");
// }

let num = 50;

if (num < 49){
    console.log("Неверно")
} else if (num > 100){
    console.log("Много")
} else {
    console.log("Верно")
}

//то же самое при помощи унарных операторов

(num == 50) ? console.log("Верно") : console.log("Неверно");


switch (num) {
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Много");
        break;
    case  50:
        console.log("Верно");
        break;
    default:
        console.log("Что-то пошло не так");
        break; 
}