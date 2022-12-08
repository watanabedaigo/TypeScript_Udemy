export {};

// enum型を用いてることで、列挙した値に順番を振ることができる
// number
enum Months {
  // 先頭の値を1で上書きすることで、0スタートではなくなる
  January = 1,
  Febrary,
  March,
  April,
  May,
  June,
  July,
  Augast,
  September,
  October,
  November,
  December,
}
console.log(Months.January);

// string
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}
let green = COLORS.GREEN;
console.log({ green });

// enum の追加
enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}
let yellow = COLORS.YELLOW;
console.log({ yellow });
