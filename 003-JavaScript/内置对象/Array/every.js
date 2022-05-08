let arr = [1, 3, 5, -7, 4, 2];

// 只要有一个是错的，结果就是错的
let result = arr.every((x) => x < 10);
console.log(result);
