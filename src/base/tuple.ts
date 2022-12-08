export {};

// 型の順序性なし
let profile: (string | number)[] = ['daigo', 28];
profile = [28, 'daigo'];
console.log({ profile });

// 型の順序性あり→tuple型を使用（インデックス番号毎に型を指定）
let profile2: [string, number] = ['daigo', 28];
// 以下はエラー発生
// profile2 = [28, 'daigo'];profile2
console.log({ profile2 });
