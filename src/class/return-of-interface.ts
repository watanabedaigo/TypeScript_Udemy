export {};

// class作成
class Mahotsukai {}
class Souryo {}

// 継承
// 複数のクラスを継承することはできない
class Taro extends Mahotsukai {}

// インターフェース作成
interface Kenja {
  // シグネチャー
  ionazun(): void;
}
interface Senshi {
  // シグネチャー
  kougeki(): void;
}

// 実装
// 複数のインターフェースを対して継承に近いことができる（実装という）
class Jiro implements Kenja, Senshi {
  // インターフェース側でシグネチャーを定義しているので、実装したこのクラス側でも定義しないとエラーが発生
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

// インスタンス作成
let jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
