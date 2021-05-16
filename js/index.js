// 0 Создать числовой массив и проинициализировать его (*случайными числами).
const arr = [];
for(let i = 0; i <= 15; i++) {
    arr.push(Math.round(Math.random() * 4));
};
console.table(arr);

// 1 Удалить последний элемент из массива, добавить по элементу в начало и конец.
arr.pop();
console.log(arr);

arr.push(5);
arr.unshift(10);
console.log(arr);
// 2 Вывести размер массива.
console.log('arr.length :>> ', arr.length);
// 3 Вывести элементы с четными индексами.
for(let i = 0; i < arr.length; i++) {
    i % 2 === 0 ? console.log(`arr[${i}] - ${arr[i]}`) : '';
};
// 4 Вывести только четные элементы (четные числа делятся на 2 без остатка).
for(let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? console.log(`arr[${i}] - ${arr[i]}`) : '';
};
// 5 Вывести индексы нулевых элементов (элемент равен нулю).
// 6 Подсчитать количество нулевых элементов.
let zeroCounter = 0;
for(let i = 0; i < arr.length; i++) {
   if (arr[i] === 0) {
       console.log(`arr[${i}] - ${arr[i]}`);
       zeroCounter++;
   };
};
console.log('zeroCounter :>> ', zeroCounter);

// 7 Получить новый массив из заданного, который будет содержать только положительные 
// числа (-1, 5, 0, 9, -10 => 5, 9).
const arr2 = [-1, 5, 0, 9, -10]; 
const positiveArr = arr2.filter(sortElems);
console.log('positiveArr :>> ', positiveArr);

function sortElems(i) {
    return i > 0;
};
// 8 Получить новый массив их заданного, который будет содержать все элементы исходного, 
// возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).
const powTwoArr = arr2.map(powToTwo);
console.log('powTwoArr :>> ', powTwoArr);

function powToTwo(i) {
    return i ** 2;
};
// 9 Проверить, являются ли все елементы массива положительными числами 
// (* или в принципе числами).
console.log('arr2.every(isMoreZero) :>> ', arr2.every(isMoreZero));
console.log('arr2.every(isNumber) :>> ', arr2.every(isNumber));

function isMoreZero(i) {
    return i > 0;
};

function isNumber(i) {
    return !Number.isNaN(i);
};
// 10 Проверить, есть ли в массиве хоть один отрицательный элемент.
console.log('arr2.some(isLessZero) :>> ', arr2.some(isLessZero));

function isLessZero(i, index) {
    if (i < 0) {
        console.log(`arr2[${index}] :>> `, i);
    };
    return i < 0;
};
// 11 Вывести элементы массива, возведенные в куб.
const powThreeArr = arr2.map(powToThree);
console.log('powThreeArr :>> ', powThreeArr);

function powToThree(i) {
    return Math.pow(i, 3);
};

// *12 Прописать для MyArray метод unshift.