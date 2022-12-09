export {};

// 互換性あり
let fooCompatible: any;
let barCompatible: string = 'TypeScript';
// 型anyに型stringを代入しているのでエラーなし。= 互換性あり
fooCompatible = barCompatible;
// 型anyが型stringに変わっている
console.log(typeof fooCompatible);

let fooString: string;
let barString: string = 'string';
// 同じ型なので代入可能
fooString = barString;

// literal型で値も指定している
let test: string;
// string型ではあるのでが代入可能
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
test = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1994 = 1994;
fooNumber = fooNumberLiteral;

// interfaceとclassは互換性あり
interface Animal {
  age: number;
  name: string;
}
class Person {
  constructor(public age: number, public name: string) {}
}
let me: Animal;
me = new Person(28, 'daigo');

// 互換性なし
let fooIncompatible: string;
let barIncompatible: number = 1;
// 型stringに型numberを代入使用としているためエラー発生。= 互換性なし
// fooIncompatible = barIncompatible;
