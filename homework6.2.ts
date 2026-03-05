//1
function parseJSON(jsonString: string): any | null {
    try {
        const data = JSON.parse(jsonString);
        console.log('JSON успешно распарсен:', data);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Ошибка парсинга JSON:', error.message);
        }
        return null;
    }
}
//2
function checkAge(age: number): boolean {
    if (age < 0) {
        throw new Error('Возраст не может быть отрицательным');
    }
    if (age > 150) {
        throw new Error('Некорректный возраст');
    }
    return true;
}

// Тестирование 
try {
    console.log(checkAge(25));    
    
    // Проверка отрицательного возраста
    console.log(checkAge(-5));    
} catch (error) {
    if (error instanceof Error) {
        console.error('Произошла ошибка:', error.message);
    } else {
        console.error('Неизвестная ошибка:', error);
    }
}

try {
    // Проверка слишком большого возраста
    console.log(checkAge(200));   
} catch (error) {
    if (error instanceof Error) {
        console.error('Произошла ошибка:', error.message);
    } else {
        console.error('Неизвестная ошибка:', error);
    }
}
//3
function divideWithLog(a: number, b: number): number {
    try {
        if (b === 0) {
            throw new Error('Деление на ноль');
        }
        return a / b;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Ошибка:', error.message);
        } else {
            console.error('Неизвестная ошибка:', error);
        }
        return NaN;
    } finally {
        console.log('Операция завершена');
    }
}

// Тестирование функции
console.log(divideWithLog(10, 2));  // Нормальное деление
console.log(divideWithLog(10, 0));  // Деление на ноль
console.log(divideWithLog(5, 'a')); // Некорректный тип
//4
function randomSuccess(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve('Успех');
            } else {
                reject(new Error('Неудача'));
            }
        }, 1000);
    });
}

async function testRandomSuccess() {
    let successCount = 0;
    let errorCount = 0;
    
    for (let i = 0; i < 5; i++) {
        try {
            await randomSuccess();
            successCount++;
        } catch (error) {
            errorCount++;
        }
    }
    
    console.log(`Успехов: ${successCount}, Ошибок: ${errorCount}`);
}
//5
function step1(): Promise<number> {
    return new Promise(resolve => setTimeout(() => resolve(5), 1000));
}

function step2(num: number): Promise<number> {
    return new Promise(resolve => setTimeout(() => resolve(num * 2), 1000));
}

function step3(num: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 10) {
                resolve(num);
            } else {
                reject(new Error('Слишком мало'));
            }
        }, 1000);
    });
}

async function processSteps() {
    try {
        const num1 = await step1();
        
        try {
            const num2 = await step2(num1);
            
            try {
                const result = await step3(num2);
                console.log('Успешно завершен весь процесс:', result);
            } catch (error) {
                if (error instanceof Error) {
                    console.error('Ошибка на шаге 3:', error.message);
                    console.log('Возвращаем результат шага 2:', num2);
                } else {
                    console.error('Неизвестная ошибка на шаге 3:', error);
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error('Ошибка на шаге 2:', error.message);
                console.log('Возвращаем результат шага 1:', num1);
            } else {
                console.error('Неизвестная ошибка на шаге 2:', error);
            }
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error('Ошибка на шаге 1:', error.message);
            console.log('Процесс прерван');
        } else {
            console.error('Неизвестная ошибка на шаге 1:', error);
        }
    }
}

// Пример использования
processSteps();
//6 
// Определяем шаги
function sTep(): Promise<number> {
    return new Promise(resolve => setTimeout(() => resolve(5), 1000));
}

function steP(num: number): Promise<number> {
    return new Promise(resolve => setTimeout(() => resolve(num * 2), 1000));
}

function step(num: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 10) {
                resolve(num);
            } else {
                reject(new Error('Слишком мало'));
            }
        }, 1000);
    });
}

// Модифицированная функция с отдельными try/catch
async function processStepsSeparate(): Promise<number | null> {
    let result: number | null = null;

    try {
        // Шаг 1
        const num1 = await step1();
        result = num1;

        try {
            // Шаг 2
            const num2 = await step2(num1);
            result = num2;

            try {
                // Шаг 3
                const finalResult = await step3(num2);
                console.log('Успешно завершен весь процесс:', finalResult);
                return finalResult;
            } catch (error) {
                if (error instanceof Error) {
                    console.error('Ошибка на шаге 3:', error.message);
                    console.log('Возвращаем результат шага 2:', result);
                    return result;
                } else {
                    console.error('Неизвестная ошибка на шаге 3:', error);
                    return result;
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error('Ошибка на шаге 2:', error.message);
                console.log('Возвращаем результат шага 1:', result);
                return result;
            } else {
                console.error('Неизвестная ошибка на шаге 2:', error);
                return result;
            }
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error('Ошибка на шаге 1:', error.message);
            console.log('Процесс прерван');
            return null;
        } else {
            console.error('Неизвестная ошибка на шаге 1:', error);
            return null;
        }
    }
}

// Пример использования
processStepsSeparate()
    .then(result => {
        if (result !== null) {
            console.log('Финальный результат:', result);
        }
    });