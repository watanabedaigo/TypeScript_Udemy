export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

// 継承：既存のクラスを拡張し、新しいクラスを作ること
class Lion extends Animal {
  // メンバー変数の型定義
  public speed: number;

  constructor(name: string, speed: number) {
    // 派生クラスのコンストラクターにはsuperが必要。これで親クラスのコンストラクターを継承。
    super(name);
    this.speed = speed;
  }

  run(): string {
    // 派生クラスで親クラスのメソッドを使う場合にもsuperを用いる。
    const parentMessage = super.run();
    return `${parentMessage} ${this.speed}km/h`;
  }
}

// // 継承したクラスを使ってインスタンス化
let lion = new Lion('lion', 80);
console.log(lion.run());
