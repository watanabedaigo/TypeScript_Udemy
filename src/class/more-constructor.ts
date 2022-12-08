export {};

// class作成
class Person {
  // 省略系（引数にアクセス修飾しを記述するだけ）
  constructor(public name: string, protected age: number) {}

  // 省略なし
  // public name: string;
  // protected age: number;
  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this.age = age;
  // }
}

// インスタンス作成
const me = new Person('daigo', 28);
console.log(me);
