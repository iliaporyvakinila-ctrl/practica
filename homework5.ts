// 1
let cities = ['пиетр', 'магадан', 'омск', 'казань', 'краснодар'];

// 2
console.log('Первый город:', cities[0]);
console.log('Третий город:', cities[2])
console.log('Последний город:', cities[cities.length - 1]);

// 3
cities[1]="москва"
console.log('Массив после замены:', cities);

// 4
cities.push('Сочи');
cities.unshift('Калининград'); 
console.log('Массив после добавления:', cities);

// 5
let removedFromEnd = cities.pop(); 
let removedFromStart = cities.shift(); 
console.log('Удален с конца:', removedFromEnd);
console.log('Удален с начала:', removedFromStart);
console.log('Массив после удаления:', cities);

// 6
let isMoscowInArray = cities.includes('Москва');
let moskvaIndex = cities.indexOf('Москва');
console.log('Есть ли "Москва" в массиве?', isMoscowInArray);
console.log('Индекс "Москвы":', moskvaIndex);

// 7
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log('Сумма чисел в массиве:', sum);

// 8
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
copiedArray.push(4); 
console.log('Оригинальный массив:', originalArray); 
console.log('Копия массива:', copiedArray);