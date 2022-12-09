export {};

// 型エイリアス
type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'daigo',
  age: 28,
};
me.age++;
console.log(me.age);

// readonly
// ジェネリクスで型引数を指定
type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'diego',
  age: 29,
};
// readonlyのためエラー発生
// friend.age++;
