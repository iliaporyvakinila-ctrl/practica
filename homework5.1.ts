// 1 Исходный массив чисел
const numbers = [4, 17, 8, 22, 9, 35, 12, 6];

// 2. Находим сумму всех чисел
let sum = 0;
for (const num of numbers) {
    sum += num;  
}
console.log('Сумма всех чисел:', sum);

// 3. Вычисляем среднее арифметическое
const average = sum / numbers.length;
console.log('Среднее арифметическое:', average);

// 4. Находим минимальное и максимальное число
let min = numbers[0];  
let max = numbers[0];

for (const num of numbers) {
    if (num < min) {
        min = num;  
    }
    if (num > max) {
        max = num;  
    }
}
console.log('Минимальное число:', min);
console.log('Максимальное число:', max);

// 5. Считаем числа меньше 15
let countLess15 = 0;
for (const num of numbers) {
    if (num < 15) {
        countLess15++;  
    }
}
console.log('Чисел меньше 15:', countLess15);

// 6. Создаем новый массив с умножением на 3
const multiplied = [];
for (const num of numbers) {
    multiplied.push(num * 3);  
}
console.log('Массив с умножением на 3:', multiplied);

// 7. Работа с массивом строк ['кот', 'собака', 'хомяк', 'попугай', 'рыбка', 'крыса']

// Исходный массив
const animals = ['кот', 'собака', 'хомяк', 'попугай', 'рыбка', 'крыса'];

// 8. Найти самое длинное слово
let longestWord = animals[0];
for (const animal of animals) {
    if (animal.length > longestWord.length) {
        longestWord = animal;
    }
}
console.log('Самое длинное слово:', longestWord);

// 9. Посчитать слова длиннее 5 букв
let countLongWords = 0;
for (const animal of animals) {
    if (animal.length > 5) {
        countLongWords++;
    }
}
console.log('Слов длиннее 5 букв:', countLongWords);

// 10. Создать массив со словами в верхнем регистре
const upperCaseAnimals = [];
for (const animal of animals) {
    upperCaseAnimals.push(animal.toUpperCase());
}
console.log('Слова заглавными:', upperCaseAnimals);

// 11. Создать массив слов на букву 'к'
const wordsStartingWithK = [];
for (const animal of animals) {
    if (animal[0] === 'к') {
        wordsStartingWithK.push(animal);
    }
}
console.log('Слова на букву "к":', wordsStartingWithK);
// 12. Работа с ценами
const prices = [350, 1200, 85, 430, 2100, 560, 75];

// 14. Создаем массив с ценами ниже 500
const cheapPrices = [];
for (const price of prices) {
    if (price < 500) {
        cheapPrices.push(price);
    }
}
console.log('Цены ниже 500:', cheapPrices);

// 15. Создаем массив форматированных строк
const formattedPrices = [];
for (const price of prices) {
    formattedPrices.push(`Цена: ${price} руб.`);
}
console.log('Форматированные цены:', formattedPrices);
// 16. Работа с двумя массивами
const students = ['Анна', 'Иван', 'Мария', 'Петр'];
const grades = [5, 4, 3, 5];

// 18. Выводим информацию о студентах и их оценках
console.log('Результаты студентов:');
for (let i = 0; i < students.length; i++) {
    console.log(`Студент ${students[i]} получил оценку ${grades[i]}`);
}

// 19. Считаем средний балл
let totalGrade = 0;
for (const grade of grades) {
    totalGrade += grade;  
}

const averageGrade = totalGrade / grades.length;
console.log('Средний балл группы:', averageGrade);
// 20. Работа со строками и массивами

// 21. Исходная строка с фруктами
const fruitsString = 'яблоко,груша,банан,апельсин,киви';

// 22. Преобразуем строку в массив через split
const fruits = fruitsString.split(',');

// 23. Создаем новый массив с восклицательным знаком
const excitedFruits = [];
for (const fruit of fruits) {
    excitedFruits.push(fruit + '!');
}

// 24. Собираем массив обратно в строку через join
const resultString = excitedFruits.join(' | ');

console.log('Исходная строка:', fruitsString);
console.log('Массив фруктов:', fruits);
console.log('Массив с восклицательным знаком:', excitedFruits);
console.log('Итоговая строка:', resultString);