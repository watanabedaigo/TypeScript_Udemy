export {};

const nextYearSalary: (currentSalary: number, rate?: number) => number = (
  currentSalary: number,
  // デフォルト引数を指定する場合は、= で値を指定する
  rate: number = 1.1
): number => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
