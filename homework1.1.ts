// 1. Длина и регистр
let text = "Привет мир программирования!";
console.log(`Длина строки: ${text.length}`);
console.log(`Верхний регистр: ${text.toUpperCase()}`);
console.log(`Нижний регистр: ${text.toLowerCase()}`);

// 2. Поиск
let jsText = "JavaScript — это круто! Я учу JavaScript.";
console.log(`Содержит "JavaScript"? ${jsText.includes("JavaScript")}`);
console.log(`Первый индекс "JavaScript": ${jsText.indexOf("JavaScript")}`);
console.log(`Последний индекс "JavaScript": ${jsText.lastIndexOf("JavaScript")}`);

// 3. Начало и конец
let filename = "photo.jpg";
console.log(`Начинается с "photo"? ${filename.startsWith("photo")}`);
console.log(`Заканчивается на ".jpg"? ${filename.endsWith(".jpg")}`);
console.log(`Заканчивается на ".png"? ${filename.endsWith(".png")}`);

// 4. Извлечение
let ts = "TypeScript";
console.log(`Подстрока "Script": ${ts.slice(4)}`);

let date = "2024-03-15";
let [year, month, day] = date.split("-");
console.log(`Год: ${year}, Месяц: ${month}, День: ${day}`);

// 5. Замена
let fruits = "я люблю яблоки, яблоки вкусные";
console.log(`Замена: ${fruits.replaceAll("яблоки", "бананы")}`);

// 6. Удаление пробелов
let user = "  admin  ";
console.log(`После trim: "${user.trim()}"`);

// 7. Сравнение строк
console.log(`"apple" < "banana": ${"apple" < "banana"}`);
console.log(`"apple" > "banana": ${"apple" > "banana"}`);

// 8. Повторение
console.log(`10 звездочек: ${"*".repeat(10)}`);

// 9. Комбинация
let word = "typescript";
let capitalized = word[0].toUpperCase() + word.slice(1);
console.log(`С заглавной буквы: ${capitalized}`);