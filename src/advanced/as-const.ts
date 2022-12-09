export {};

let name: string = 'daigo';

// constアサーション：末尾に as const と書くことで、literal型の値が指定される
let nickname = 'daigo' as const;
// 再代入は不可能
// nickname = 'diego';

let profile = {
  name: 'daigo',
  age: 28,
} as const;
// 再代入は不可能（全てのプロパティがreadonlyになる）
// profile.name = 'diego';
