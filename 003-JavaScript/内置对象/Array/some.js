let arr = [1, 3, 5, -7, 4, 2];

// 只要有一个是对的，结果就是对的
let result = arr.some((x) => x < 0);
console.log(result);
