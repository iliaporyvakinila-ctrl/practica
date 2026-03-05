// 1. Таймеры
console.log('Старт');
setTimeout(() => {
    console.log('Прошло 2 секунды');
    setTimeout(() => {
        console.log('И еще одна');
    }, 1000);
}, 2000);

// 2. Простой Promise
async function delayedMessage(message: string, delay: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

// Использование
(async () => {
    const result = await delayedMessage('Привет, мир!', 1500);
    console.log(result);
})();

// 3. Async/await последовательно
async function stepA(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve('Шаг A выполнен'), 1000));
}

async function stepB(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve('Шаг B выполнен'), 1000));
}

async function stepC(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve('Шаг C выполнен'), 1000));
}

async function runSteps() {
    console.log(await stepA());
    console.log(await stepB());
    console.log(await stepC());
}

// 4. Promise.all
async function loadData1(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve('Данные 1'), 1000));
}

async function loadData2(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve('Данные 2'), 2000));
}

async function loadData3(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve('Данные 3'), 3000));
}

async function parallelLoad() {
    console.time('Параллельная загрузка');
    const [data1, data2, data3] = await Promise.all([
        loadData1(),
        loadData2(),
        loadData3()
    ]);
    console.log('Полученные данные:', data1, data2, data3);
    console.timeEnd('Параллельная загрузка');
}

// 5. Реальный пример
async function loadUser(id: number): Promise<{ id: number, name: string }> {
    return new Promise(resolve => setTimeout(() => {
        resolve({ id, name: `Пользователь ${id}` });
    }, 1000));
}

async function loadPosts(userId: number): Promise<string[]> {
    return new Promise(resolve => setTimeout(() => {
        resolve([`Пост 1 от ${userId}`, `Пост 2 от ${userId}`]);
    }, 1000));
}

async function loadUserWithPosts(id: number) {
    const user = await loadUser(id);
    const posts = await loadPosts(user.id);
    return { user, posts };
}

// Запуск примеров
runSteps();
parallelLoad();
loadUserWithPosts(42).then(result => console.log('Загруженный пользователь:', result));