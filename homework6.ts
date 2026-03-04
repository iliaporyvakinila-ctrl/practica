// Простые функции
function sum(a: number, b: number): number {
    return a + b;
}

function isPositive(num: number): boolean {
    return num > 0;
}

function getLength(str: string): number {
    return str.length;
}

// Функции с условиями
function max(a: number, b: number): number {
    return a > b ? a : b;
}

function canVote(age: number): boolean {
    return age >= 18;
}

// Функции с массивами
function sumArray(arr: number[]): number {
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    return total;
}

function getLongWords(words: string[]): string[] {
    const result: string[] = [];
    for (const word of words) {
        if (word.length > 5) {
            result.push(word);
        }
    }
    return result;
}

function doubleNumbers(arr: number[]): number[] {
    const result: number[] = [];
    for (const num of arr) {
        result.push(num * 2);
    }
    return result;
}

// Необязательные параметры
function greet(name: string, title?: string): string {
    if (title) {
        return `Здравствуйте, ${title} ${name}!`;
    }
    return `Привет, ${name}!`;
}

// Параметры по умолчанию
function calculatePrice(price: number, discount: number = 0): number {
    return price * (100 - discount) / 100;
}

// Анонимные функции
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
    console.log(`Элемент: ${num}`);
});

const multiplyByThree = (num: number): number => num * 3;

// Комбо-функция
function analyzeArray(arr: number[]): string {
    if (arr.length === 0) return "Массив пустой";
    
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    
    for (const num of arr) {
        sum += num;
        if (num < min) min = num;
        if (num > max) max = num;
    }
    
    const average = sum / arr.length;
    
    return `Сумма: ${sum}, Среднее: ${average}, Минимум: ${min}, Максимум: ${max}`;
}