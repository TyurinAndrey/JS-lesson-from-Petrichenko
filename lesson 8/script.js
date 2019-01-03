let time = +prompt("Введите дату в формате YYYY-MM-DD");
let money = +prompt("Ваш бюджет на месяц?");
let expenses1 = +prompt("Введите обязательную статью расходов");
let expenses2 = +prompt("Во сколько обойдется?");

let expenses = new Object();
expenses.one = expenses1;
expenses.two = expenses2;

let appData = new Object();
appData.budget = money;
appData.timeData = time;
appData.expenses = expenses;
// appData.optional.Expenses = 0;
// appData.income = 0;
// appData.savings = false;

budget1day = (money-expenses2)/30;
alert(budget1day);

