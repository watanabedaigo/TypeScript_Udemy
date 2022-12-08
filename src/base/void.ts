export {};

// 戻り値の型は、関数名の後に :型 を用いて指定する
function returnNothing(): void {
  console.log("I don't return anything!");
}
console.log(returnNothing());
