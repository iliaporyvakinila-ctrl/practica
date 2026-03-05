// 1. Простой type
type ID = string | number;

let userId1: ID = 123;
let userId2: ID = 'abc456';

// 2. Union тип
type DayOfWeek = 'пн' | 'вт' | 'ср' | 'чт' | 'пт' | 'сб' | 'вс';

let today: DayOfWeek = 'ср';

// 3. Тип для объекта
type Person = {
    name: string;
    age: number;
    city: string;
};

let person: Person = {
    name: 'Анна',
    age: 25,
    city: 'Москва'
};

console.log('Person:', person);

// 4. Необязательные поля
type Car = {
    brand: string;
    model: string;
    year?: number;
};

let car1: Car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
};

let car2: Car = {
    brand: 'BMW',
    model: 'X5'
};

// 5. typeof
const settings = {
    theme: 'light',
    fontSize: 16,
    language: 'ru'
};

type SettingsType = typeof settings;

let newSettings: SettingsType = {
    theme: 'dark',
    fontSize: 14,
    language: 'en'
};

// 6. keyof
type PersonKeys = keyof Person;

let key: PersonKeys = 'name';

// 7. as const
const directions = ['север', 'юг', 'запад', 'восток'] as const;

type Direction = typeof directions[number];

function move(direction: Direction) {
    console.log(`Двигаемся на ${direction}`);
}

// 8. satisfies
type Color = string | { r: number; g: number; b: number };

const color = { r: 255, g: 0, b: 0 } satisfies Color;

// 9. Readonly
type Config = {
    readonly apiUrl: string;
    readonly timeout: number;
};

let config: Config = {
    apiUrl: 'https://api.com',
    timeout: 5000
};



// 10. Дженерики
// Функция для переворота массива
function reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse();
}

// Тип для пары значений
type Pair<T, U> = {
    first: T;
    second: U;
};

let pair: Pair<string, number> = {
    first: 'Привет',
    second: 42
};