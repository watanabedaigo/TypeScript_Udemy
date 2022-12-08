export {};

// class作成
class Person {
  // メンバー変数の型定義
  name: string;
  age: number;

  // constructor
  // 自動で実行される初期化処理。引数の値が指定したプロパティに渡される。
  // returnしないため、戻り値の型指定はしなくてよい。
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // method
  profile(): string {
    return `name:${this.name}, age:${this.age} `;
  }
}

// インスタンス化、インスタンス作成
let taro = new Person('Tarzo', 10);
console.log({ taro });
console.log(taro.profile());

let jiro = new Person('Jiro', 20);
console.log({ jiro });
console.log(jiro.profile());
