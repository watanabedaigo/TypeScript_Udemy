export {};

// {} を用いることで、プロパティ毎に型指定をすることができる
let profile2: {
  name: string;
} = {
  name: 'daigo',
};
profile2 = {
  // name以外は型指定していないため、代入しようとした際にエラーが出る
  name: 'watanabe',
};
console.log({ profile2 });

//　型が広い範囲を許容するため非推奨
let profile1: object = {
  name: 'daigo',
};
profile1 = {
  birthDay: 1994,
};
console.log({ profile1 });
