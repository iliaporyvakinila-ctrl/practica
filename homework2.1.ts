// 1. Округление
const numbers = [4.3, 4.8, -2.3, -2.8];

console.log("Округление чисел:");
numbers.forEach(num => {
    console.log(`Число: ${num}`);
    console.log(`floor: ${Math.floor(num)}`);
    console.log(`ceil: ${Math.ceil(num)}`);
    console.log(`round: ${Math.round(num)}`);
    console.log("----------");
});

// 2. Степени и корни
console.log("Степени и корни:");
console.log(`2^10 = ${Math.pow(2, 10)}`);
console.log(`3^5 = ${Math.pow(3, 5)}`);
console.log(`√144 = ${Math.sqrt(144)}`);
console.log(`√50 = ${Math.sqrt(50)}`);

// 3. Минимум и максимум
const array = [34, 67, 12, 89, 45, 23];
console.log("\nМинимум и максимум:");
console.log(`Минимум: ${Math.min(...array)}`);
console.log(`Максимум: ${Math.max(...array)}`);

// 4. Случайные числа
console.log("\nСлучайные числа:");
console.log(`Случайное число 1-100: ${Math.floor(Math.random() * 100) + 1}`);
console.log(`Случайное число 50-60: ${Math.floor(Math.random() * 11) + 50}`);
console.log(`Случайное дробное 0-1: ${Math.random()}`);

// 5. Модуль числа
console.log("\nМодуль числа:");
console.log(`Разница между 10 и 7: ${Math.abs(10 - 7)}`);
console.log(`Разница между 5 и 12: ${Math.abs(5 - 12)}`);

// 6. Симулятор игральной кости
console.log("\nБроски кубиков:");

// 6-гранный кубик
console.log("6-гранный кубик:");
for(let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 6) + 1);
}

// 20-гранный кубик
console.log("20-гранный кубик:");
for(let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 20) + 1);
}

// 7. Округление до десятых
console.log("\nОкругление числа Пи:");
const pi = Math.PI;
const roundedPi = Math.round(pi * 100) / 100;
console.log(`Число Пи (округленное): ${roundedPi}`);