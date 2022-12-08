export {};

// returnの型は、関数の引数の()の後に記述して指定
let bmi: (weight: number, height: number) => number = (
  weight: number,
  height: number
): number => {
  return weight / (height * height);
};
console.log(bmi(1.71, 63));
