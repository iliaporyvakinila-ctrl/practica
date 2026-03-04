//1
let secretNumber = 7
let guess = 5
if (guess === secretNumber) {
    console.log('Ты победил!')
}else {
    console.log('Попробуй еще')
}
//2
let purchaseAmount = 5000;
let discount = 0;
let finalAmount = 0;

if (purchaseAmount > 5000) {
  discount = 0.1; 
  finalAmount = purchaseAmount - (purchaseAmount * discount);
} else {
  finalAmount = purchaseAmount;
}
console.log("Итоговая сумма: " + finalAmount);
//3
let age = 25; 

if (age <= 12) {
  console.log("Ребенок");
} else if (age >= 13 && age <= 17) {
  console.log("Подросток");
} else if (age >= 18 && age <= 60) {
  console.log("Взрослый");
} else if (age >= 60) {
  console.log("Пенсионер");
}
//4
let login = "admin";
let password = "12345";
let userLogin = "admin"; 
let userPassword = "12345"; 

if (userLogin !== login) {
  console.log("Пользователь не найден");
} else if (userPassword !== password) {
  console.log("Неверный пароль");
} else {
  console.log("Добро пожаловать!");
}
//5
let number = 17;
let parity = (number % 2 === 0) ? "четное" : "нечетное";

console.log(parity);
//6
let dayNumber = 6; // можно заменить на prompt("Введите номер дня (1-7):") и преобразовать в число

switch (dayNumber) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
  case 7:
    console.log("Выходной");
    break;
  default:
    console.log("Неверный номер дня");
}