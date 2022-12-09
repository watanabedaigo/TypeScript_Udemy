export {};

// class作成
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
}

// インスタンス作成
let taro = new Person('taro', 10);
console.log(taro);

// constructor parameters : クラスをインスタンス化する際に渡す引数の型を取得
// ConstructorParameters<typeof クラス>
type Profile = ConstructorParameters<typeof Person>;

const profile: Profile = ['daigo', 28];
const daigo = new Person(...profile);
console.log(daigo);
