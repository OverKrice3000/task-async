/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise<number>((resolve) => {
        setTimeout(() => resolve(ms), ms);
    });
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    const result: number[] = [];

    return Promise.all([
        mock(100).then((data) => {
            result.push(data);
        }),
        mock(200).then((data) => {
            result.push(data);
        }),
        mock(300).then((data) => {
            result.push(data);
        }),
    ]).then((data) => {
        return result;
    });
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err) {
        // @ts-ignore
        return err.message;
    }
}
