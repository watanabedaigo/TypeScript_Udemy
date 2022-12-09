export {};

// 型アサーション：互換性のある型に変換すること（anyをstringにはできる、stringをnumberにはできない）

let name: any = 'daigo';
// as 型 で型を指定するor <>で型を指定する（非推奨、jsxの記法に似ているため）
let length = (name as string).length;
// let length = name.length as number;
// let length = (<string>name).length;

console.log(length);
