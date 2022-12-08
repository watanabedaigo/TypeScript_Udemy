export {};

// class作成
class MyNumberCard {
  // * owner
  //   * 初期化時に設定できる constructorで設定
  //   * 途中で変更できない アクセス修飾しをprivateにしたことで変更不可能へ
  //   * インスタンスからアクセス可能 getメソッドを設定
  // * secretNumver
  //   * 初期化時に設定できる　constructorで設定
  //   * 途中で変更できる setメソッドを設定
  //   * インスタンスからアクセス不可能　アクセス修飾しをprivateにしたことで変更不可能へ

  private _owner: string;
  private _secretNumver: number;

  // constructor
  constructor(owner: string, secretNumver: number) {
    this._owner = owner;
    this._secretNumver = secretNumver;
  }

  // method
  // getter
  get owner(): string {
    return this.owner;
  }

  // setter
  set secretNumver(secretNumver: number) {
    this._secretNumver = secretNumver;
  }

  // debug
  degubPrint(): string {
    return `secretNumver: ${this._secretNumver}`;
  }
}

// インスタンス作成
let card = new MyNumberCard('daigo', 19940801);
console.log(card.degubPrint());
