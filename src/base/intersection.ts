export {};

// 型エイリアス
type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

// 非推奨
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }
// インターセクションを用いて、既存の型を組み合わせて新しい型を作る
type TwoWayPlayer = Pitcher1 & Batter1;

// 変数
const Sasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const Ochiai: Batter1 = {
  battingAverage: 0.367,
};

const Otani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
