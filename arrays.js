
// task1
// let a = [11,24,16,-4];

// for (i = 0; i < a.length ; i++){
//     if (a[i]>0){
//         console.log(a[i]+2);
//     }
// }

// task2
// let arr = [21,34,26,-42,71,9];

// for (i = 0; i < arr.length ; i++){
//     if (arr[i]%2==1){
//         console.log(arr[i]);
//     }
// }

// // task3
// let arr = [31,44,62,13,17,19];
// let maxOlmadanCem = 0;
// let cem = 0;
// let max = -1;
// for (i = 0; i < arr.length ; i++){
//     if (max < arr[i]){
//         max = arr[i];
//     }
//     cem+=arr[i];
//     maxOlmadanCem = cem - max;
// }
// console.log(maxOlmadanCem);

// task4
// let arr = [11, 44, 65, 27, 23, 19];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// let cem = 0;  
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     secondLargest = largest;
//     largest = arr[i];
//   } else if (arr[i] > secondLargest && arr[i] !== largest) {
//     secondLargest = arr[i];
//   }
//   cem = largest + secondLargest;
// }
// console.log(cem);
