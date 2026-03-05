// 1. Создание объекта film
let film: { title: string, year: number, rating: number } = {
    title: 'Интерстеллар',
    year: 2014,
    rating: 8.6
};

console.log('Исходный фильм:');
console.log(`Название: ${film.title}`);
console.log(`Год: ${film.year}`);
console.log(`Рейтинг: ${film.rating}`);

// 2. Изменение объекта
film.year = 2015; // Меняем год
(film as any).director = 'Кристофер Нолан'; // Добавляем новое свойство

console.log('\nИзменённый фильм:', film);

// 3. Вложенный объект person
let person = {
    name: 'Анна',
    age: 25,
    address: {
        city: 'Москва',
        street: 'Ленина'
    }
};

console.log('\nГород человека:', person.address.city);

// 4. Перебор объекта
let user: { name: string, age: number, city: string } = { name: 'Анна', age: 25, city: 'Москва' };
console.log('\nПеребор свойств объекта:');
for (let key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`${key}: ${user[key as keyof typeof user]}`);
    }
}

// 5. Копирование через spread
let obj1 = { a: 1, b: 2, c: 3 };
let copyObj = { ...obj1 };
copyObj.a = 100;

console.log('\nОригинал:', obj1);
console.log('Копия:', copyObj);

// 6. Объединение объектов
let personInfo = { name: 'Иван', age: 30 };
let contactInfo = { email: 'ivan@mail.com', phone: '+79991234567' };
let profile = { ...personInfo, ...contactInfo };

console.log('\nОбъединённый профиль:', profile);

// 7. Копирование с изменением
let userInfo = { name: 'Иван', age: 25, city: 'Москва' };
let updatedUser = { ...userInfo, city: 'СПб' };

console.log('\nОбновлённый пользователь:', updatedUser);

// 8. Массив объектов (со звёздочкой)
let students = [
    { name: 'Анна', grade: 4.5 },
    { name: 'Иван', grade: 5.0 },
    { name: 'Мария', grade: 4.0 }
];

// Получаем массив имён
let names = students.map(student => student.name);
console.log('\nИмена студентов:', names);

// Фильтруем студентов с оценкой выше 4
let goodStudents = students.filter(student => student.grade > 4);
console.log('Студенты с оценкой > 4:', goodStudents);

// Находим среднюю оценку
let avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log('Средняя оценка:', avgGrade);