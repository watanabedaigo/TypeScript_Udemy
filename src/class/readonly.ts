export {};

// class作成
class VisaCard {
  constructor(public readonly owner: string) {}
}

// インスタンス作成
let card1 = new VisaCard('daigo');
// エラー発生
// card1.owner = 'DAIGO';
console.log(card1);
