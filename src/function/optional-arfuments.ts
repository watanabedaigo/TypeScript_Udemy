export {};

// returnの型は、関数の引数の()の後に記述して指定
// アロー関数では、処理がreturnのみの場合、{}とreturnを省略可能
let bmi: (weight: number, height: number) => number = (
  weight: number,
  height: number
): number => weight / (height * height);
console.log(bmi(1.71, 63));

// bmi(身長, 体重, console.logで出力するかどうか?)
// bmi(1.71, 63, true); 出力する
// bmi(1.71, 63, false); 出力しない
// bmi(1.71, 63); 出力しない
let bmi2: (weight: number, height: number, printable?: boolean) => number = (
  weight: number,
  height: number,
  // 引数の末尾に?を記述することで、省略可能な引数になる
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};
bmi2(1.71, 63, true);
