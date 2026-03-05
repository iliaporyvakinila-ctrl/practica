// Умножение чисел на 3
const numbers1 = [2, 5, 8, 11, 14];
const multiplied = numbers1.map(num => num * 3);
console.log(multiplied); 

// Преобразование строк в верхний регистр
const words1 = ['привет', 'мир', 'typescript'];
const upperCaseWords = words1.map(word => word.toUpperCase());
console.log(upperCaseWords); 

// Фильтрация четных чисел
const numbers2 = [15, 22, 8, 31, 12, 47, 19];
const evens = numbers2.filter(num => num % 2 === 0);
console.log(evens); 

// Фильтрация слов по длине
const animals = ['кот', 'собака', 'хомяк', 'слон', 'тигр'];
const longAnimals = animals.filter(animal => animal.length > 3);
console.log(longAnimals); 

// Фильтрация по наличию буквы 'а'
const fruits = ['яблоко', 'банан', 'апельсин', 'киви', 'груша'];
const withA = fruits.filter(fruit => fruit.includes('а'));
console.log(withA); 

// Четные числа * 10
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result1 = numbers3
  .filter(num => num % 2 === 0)
  .map(num => num * 10);
console.log(result1); 

// Длинные слова в верхнем регистре
const fruits2 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const result2 = fruits2
  .filter(fruit => fruit.length > 5)
  .map(fruit => fruit.toUpperCase());
console.log(result2); 

// Сумма чисел
const sumArray = [23, 45, 12, 67, 34];
const sum = sumArray.reduce((acc, num) => acc + num, 0);
console.log(sum);1

// Произведение
const productArray = [1, 2, 3, 4, 5];
const product = productArray.reduce((acc, num) => acc * num, 1);
console.log(product); 

// Максимум и минимум
const numbers4 = [42, 17, 85, 23, 91, 36];
const max = numbers4.reduce((acc, num) => Math.max(acc, num));
const min = numbers4.reduce((acc, num) => Math.min(acc, num));
console.log(max); 
console.log(min); 

// Подсчет четных/нечетных
const countResult = numbers4.reduce((acc, num) => {
  num % 2 === 0 ? acc.even++ : acc.odd++;
  return acc;
}, { even: 0, odd: 0 });
console.log(countResult); 

// Исходный массив
const numbers = [5, 12, 8, 130, 44, 67, 23, 9];

// Цепочка преобразований
const result = numbers
  .filter(num => num > 10)      
  .map(num => num * 2)         
  .filter(num => num > 50)      
  .map(num => `Результат: ${num}`); 

console.log(result);

// Массив чисел
const grades = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Вычисление среднего через reduce
const average = grades.reduce((sum, num) => sum + num, 0) / grades.length;

console.log(`Среднее арифметическое: ${average}`);

// Исходный массив слов
const Animals = ['кот', 'собака', 'хомяк', 'попугай', 'рыбка'];

//  Общее количество букв
const totalLetters = animals.reduce((acc, word) => acc + word.length, 0);
console.log(`Всего букв: ${totalLetters}`); // 25

//  Самое длинное слово
const longestWord = animals.reduce((longest, word) => {
  return word.length > longest.length ? word : longest;
}, '');

console.log(`Самое длинное слово: ${longestWord}`);

//  Массив с длиной слов
const wordsWithLength = animals.map(word => `${word} (${word.length})`);
console.log(wordsWithLength);
