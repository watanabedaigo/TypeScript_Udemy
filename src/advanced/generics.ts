export {};

// ジェネリクス：汎用的なクラス、メソッドに特定の型を紐づけること

// 関数
// ジェネリクスの記法。引数の()の前に<>と書く。今回はTが抽象的な型となる。（stringにもnumberにもなる）
const echo = <T>(arg: T): T => {
  return arg;
};
// <>内で型を指定することで、抽象的だった型が具体的な型になる
console.log(echo<number>(100));
console.log(echo<string>('test'));
console.log(echo<boolean>(true));

// クラス
// ジェネリクスの記法。クラス名の後に<>と書く。今回はTが抽象的な型となる。（stringにもnumberにもなる）
class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}
// <>内で型を指定することで、抽象的だった型が具体的な型になる
console.log(new Mirror<number>(12345).echo());
console.log(new Mirror<string>('generics').echo());
console.log(new Mirror<boolean>(true).echo());
