export {};

// 抽象クラスを用いることで、子クラス側でオーバーライドし忘れている際にエラーが出る。そのため漏れがなくなるという利点がある
// class作成
// abstractを用いて抽象クラスを作成
abstract class Animal {
  // abstractを用いて抽象メソッドを作成
  abstract cry(): string;
}

// 抽象クラスはオーバーライドが必要なので、継承
class Lion extends Animal {
  // 親クラスが抽象クラスなので、cryをオーバーライドしないとエラー発生
  cry() {
    return 'roar';
  }
}
