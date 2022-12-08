export {};

// 引数の数がわからない場合はrestパラメーターを使用
// restパラメーターは配列に格納されるので、型指定は[]を用いる
const sum: (...values: number[]) => number = (...values: number[]): number => {
  let sum: number = 0;
  for (const value of values) {
    sum += value;
  }
  console.log(sum);
  return sum;
};

sum(1, 2, 3, 4, 5);
