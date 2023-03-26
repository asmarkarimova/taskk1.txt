// task1
// let num = [11,24,16,-4];

// for (i = 0; i < num.length ; i++){
//     if (num[i]>0){
//         console.log(num[i]+2);
//     }
// }

// task2
// let num = [21,34,26,-42,71,9];

// for (i = 0; i < num.length ; i++){
//     if (num[i]%2==1){
//         console.log(num[i]);
//     }
// }

// // task3
// let num = [31,44,62,13,17,19];
// let withoutmax = 0;
// let sum = 0;
// let max = -1;
// for (i = 0; i < num.length ; i++){
//     if (max < num[i]){
//         max = num[i];
//     }
//     sum+=num[i];
//     withoutmax = sum - max;
// }
// console.log(withoutmax);

// task4
// let num = [11, 44, 65, 27, 23, 19];
// let big = -Infinity;
// let big2 = -Infinity;
// let sum = 0;  
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > big) {
//     big2 = big;
//     big = num[i];
//   } else if (num[i] > big2 && num[i] !== big) {
//     big2 = num[i];
//   }
//   sum = big + big2;
// }
// console.log(sum);

