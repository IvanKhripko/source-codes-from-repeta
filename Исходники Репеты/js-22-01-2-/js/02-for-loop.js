/*
 * Цикл for
 */

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }


// for (let i = 50; i >= 0; i -= 5) {
//     console.log(i);
// }







// console.log('qweqwe');

/*
 * Pre-increment и Post-increment
 */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

//создать пременные с работниками
// const employees = 10;
// let totalSalary = 0;
// // присвоить случайную зп каждому работнику от 500 до 5000
// const minSalary = 500;
// const maxSalary = 5000;


// for (let i = 0; i < employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,);
//     console.log(`ЗП - ${i} - ${salary} `);
//     totalSalary += salary;
// }

// console.log(`Общая ЗП: ${totalSalary}`);
// выести в консоль сумму зарплат


















//  1 сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // 3 сгенерить случайную зп
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );

//   console.log(`ЗП работника номер ${i} - ${salary}`);

//   // 4  прибавить к тоталу
//   totalSalary += salary;
// }

// // 5 лог
// console.log('totalSalary: ', totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, 
 *  сумма 6.
 */
// // написать вары для минимального числа и максимального
// const minNumber = 1;
// const maxNumber = 10;
// // написать переменную для суммы всех четных чисел
// let totalNumbers = 0;
// // найти все чётные числа в форе которые входят в диапазон от мин до макс
// for (i = minNumber; i <= maxNumber; i += 1) {
//     // console.log(i);
    
//     let evenNumber;
//     if (i % 2 === 0) {
//         console.log(i, 'even');
//         totalNumbers += i;
//     } else {
//         console.log(i, 'not even number');
//     }
    
//     }
    
//     console.log(totalNumbers);

// законсолить сумму этих чисел

// написать вары для минимального числа и максимального
const minNumber = 1;
const maxNumber = 10;
// написать переменную для суммы всех четных чисел
let totalNumbers = 0;
// найти все чётные числа в форе которые входят в диапазон от мин до макс
for (i = minNumber; i <= maxNumber; i += 1) {
    if (i % 2 !== 0) {
        console.log(i, 'not even number');
        continue;
    }
    console.log(i, 'even');
        totalNumbers += i;
    
    }
    
    console.log(totalNumbers);























//  1 вары
// const min = 0;
// const max = 5;
// let total = 0;

// // фор от min до max с шагом в 1
// for (let i = min; i <= max; i += 1) {
//   // проверяем остаток от деления
//   if (i % 2 !== 0) {
//     // console.log('Не чётное: ', i);
//     continue;
//   }

//   // пишем в сумму
//   console.log('чётное: ', i);
//   total += i;

//   // аналог +=
//   // total = total + i;
// }

// console.log('total: ', total);
