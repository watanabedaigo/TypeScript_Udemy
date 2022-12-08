export {};

// シグネチャー。関数の型の概略を定義。
function double(value: number): number;
function double(value: string): string;

// オーバーロード側では型はanyで良い。理由はシグネチャーで既に型を定めているから。
function double(value: any): any {
  let result: any;
  if (typeof value === 'number') {
    result = value * 2;
  } else if (typeof value === 'string') {
    result = value + value;
  }
  return result;
}

console.log(double(100));
console.log(double('Go'));
