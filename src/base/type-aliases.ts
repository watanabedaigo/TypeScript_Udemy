export {};

// エイリアスを使用することで、別名をつけて管理することができる
// type エイリアス名 = で記述。 別名で管理するため代入が必要。エイリアスの先頭字は大文字
type Profile = {
  name: string;
  age: number;
};
const example1: Profile = {
  name: 'daigo',
  age: 28,
};
console.log({ example1 });

// typeof を使用することで、特定の変数に指定されている型を取り出すことができる
// 型を使い回すことができる
type Profile2 = typeof example1;
