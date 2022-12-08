export {};

// class作成
class Person {
  // 型定義
  // アクセス修飾しpublicを用いることで、インスタンスでもアクセス可能
  // publicは省略可能。基本は省略する。
  public name: string;
  // アクセス修飾しprivateを用いることで、インスタンスではアクセス不可能（Personクラス内ではアクセス可能なので、profile()内では使用可能）
  private age: number;
  // アクセス修飾しprotectedを用いることで、このクラス内、そしてこのクラスを継承したクラス内でアクセス可能
  protected nationality: string;

  // constructor
  // classを作成した際に自動で実行される初期化処理。引数の値が渡される。
  // returnしないため、戻り値の型指定はしなくてよい。
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  // method
  profile(): string {
    // Personクラス内なので、アクセス修飾しはprivateだが使用可能
    return `name:${this.name}, age:${this.age}, nationality:${this.nationality} `;
  }
}

// Personクラスを継承したAndroidクラスを作成
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // 派生クラスのコンストラクターにはsuperが必要。これで親クラスのコンストラクターを継承。
    super(name, age, nationality);
  }

  // method
  profile(): string {
    // Personクラス内なので、アクセス修飾しはprivateだが使用可能
    // アクセス修飾しがprivateのため、このクラス内ではageプロパティにはアクセスできない。
    return `name:${this.name},  nationality:${this.nationality} `;
  }
}

// インスタンス化、インスタンス作成
let taro = new Person('Taro', 10, 'Japan');
console.log(taro.name);
// エラー発生
// console.log(taro.age);
console.log(taro.profile());
