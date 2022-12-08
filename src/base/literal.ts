export {};

// literal型を用いて許容する値を指定する
// string
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';
dayOfTheWeek = '火';
// エラー発生
// dayOfTheWeek = '31';

// number
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// エラー発生
// month = 13;

// boolean（すでにtrue / falseの2つしか使わないが、literal型でさらに限定することも可能）
let TRUE: true = true;
