'use strict'

// 0 Создать числовой массив и проинициализировать его (*случайными числами).
console.group('Task 0');
    const arr = [];
    for(let i = 0; i < 20; i++) {
        arr.push(Math.round(Math.random() * 4));
    };
    console.table(arr);
console.groupEnd();

// 1 Удалить последний элемент из массива, добавить по элементу в начало и конец.
console.group('Task 1');
    arr.pop();
    arr.push(5);
    arr.unshift(10);
    console.log(arr);
console.groupEnd();

// 2 Вывести размер массива.
console.group('Task 2');
    console.log('arr.length :>> ', arr.length);
console.groupEnd();

// 3 Вывести элементы с четными индексами.
console.group('Task 3');
    for(let i = 0; i < arr.length; i++) {       
        console.log(`arr[${i}] - ${arr[i]}`);
        i++;
    };
console.groupEnd();

// 4 Вывести только четные элементы (четные числа делятся на 2 без остатка).
console.group('Task 4');
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(`arr[${i}] - ${arr[i]}`);
        };
    };
console.groupEnd();

// 5 Вывести индексы нулевых элементов (элемент равен нулю).
// 6 Подсчитать количество нулевых элементов.
console.group('Task 5 && 6');
    let zeroCounter = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            console.log(`arr[${i}] - ${arr[i]}`);
            zeroCounter++;
        };
    };
    console.log('zeroCounter :>> ', zeroCounter);
console.groupEnd();

// 7 Получить новый массив из заданного, который будет содержать только положительные 
// числа (-1, 5, 0, 9, -10 => 5, 9).
console.group('Task 7');
    const arr2 = [-1, 5, 0, 9, -10]; 
    const positiveArr = arr2.filter(getPositive);
    console.log('positiveArr :>> ', positiveArr);

    function getPositive(item) {
        return item > 0;
    };
console.groupEnd();

// 8 Получить новый массив их заданного, который будет содержать все элементы исходного, 
// возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).
console.group('Task 8');
    const powTwoArr = arr2.map(powToTwo);
    console.log('powTwoArr :>> ', powTwoArr);
    
    function powToTwo(i) {
        return i ** 2;
    };
console.groupEnd();

// 9 Проверить, являются ли все елементы массива положительными числами 
// (* или в принципе числами).
console.group('Task 9');
    console.log('arr2.every(isMoreZero) :>> ', arr2.every(isMoreZero));
    console.log('arr2.every(isNumber) :>> ', arr2.every(isNumber));

    function isMoreZero(i) {
        return i > 0;
    };

    function isNumber(i) {
        return !Number.isNaN(i);
    };
console.groupEnd();

// 10 Проверить, есть ли в массиве хоть один отрицательный элемент.
console.group('Task 10');
    console.log('arr2.some(isLessZero) :>> ', arr2.some(isLessZero));

    function isLessZero(i, index) {
        if (i < 0) {
            console.log(`arr2[${index}] :>> `, i);
        };
        return i < 0;
    };
console.groupEnd();

// 11 Вывести элементы массива, возведенные в куб.
console.group('Task 11');
    arr2.forEach(powToThree);

    function powToThree(i, index) {
        console.log(`arr[${index}] = ${ Math.pow(i, 3) }` ); 
    };
console.groupEnd();

// *12 Прописать для MyArray метод unshift
console.groupCollapsed('Task 12 - method unshift');
    function MyArray() {
        if (!new.target) {
          return new MyArray();
        };
        this.length = 0;
    };
      
    const myArrayProto = new MyArray();

    myArrayProto.pop = function() {
        if(this.length === 0) {
            return;
        };
        const lastItem = this[this.length-1]
        delete this[--this.length];
        return lastItem;
    };
    myArrayProto.push = function(item) {
        this[this.length] = item;
        return ++this.length;
    };
    myArrayProto.shift = function() {
        if ( this.length === 0 ) {
          return;
        }
        const fistItem = this[0];
        for(let i = 0; i < this.length - 1; i++) {
          this[i] = this[i+1];
        }
        delete this[--this.length];
        return fistItem;
    };
    myArrayProto.unshift = function(item) {
        for(let i = this.length; i >= 0; i--) {
            this[i] = this[i - 1];
        };
        this[0] = item;
        return ++this.length;
    };
      
    MyArray.prototype = myArrayProto;
      
    const myArr1 = new MyArray();
    
    for(let i = 0; i <= 4; i++) {
        myArr1.push(i);
    };
    console.log(myArr1);

    myArr1.unshift(333);
    console.log(myArr1);

    myArr1.unshift(5444443);
    console.log(myArr1);
console.groupEnd();




