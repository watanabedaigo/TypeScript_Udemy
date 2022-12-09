export {};

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 2));

// return type : 戻り値の型を取得
type ReturnTypeFromAdd = ReturnType<typeof add>;
// 仕組み
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
