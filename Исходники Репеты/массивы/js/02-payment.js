/*
 * Посчитать общую сумму покупок в корзине
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let totalPrice = 0;

// for (product of cart) {
//   totalPrice += product;
// }


// console.log(`'сумма покупок:' ${totalPrice}`);


const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let totalPrice = 0;

for (let i = 0; i < cart.length; i += 1) {
  const productWithTax = cart[i] + cart[i] * 0.2;
  console.log(productWithTax);
  totalPrice += productWithTax;

  totalPrice = Number(totalPrice.toFixed(2))
}



console.log(totalPrice);
// console.log(`'сумма покупок:' ${totalPrice}`);


😂😂

































// // 2 сделать переменную total до цикла
// let total = 0;

// // 1 перебрать массив
// // for (let i = 0; i < cart.length; i += 1) {
// //   // console.log(cart[i]);
// //   // 3 каждый элемент приплюслвать к total
// //   total += cart[i];
// //   // total = total + cart[i];
// // }

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);

// // Добавить такс

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// for (let value of cart) {
//   value = Math.round(value * 1.1);
// }

// console.log(cart);
