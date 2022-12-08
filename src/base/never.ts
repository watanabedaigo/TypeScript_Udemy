export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  // 関数に戻り値がないので、try内の処理でエラーが発生。よってcatch内の処理が実行される。
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

// voidは戻り値がない可能性がある場合
let hoo: void = undefined;
// neverは戻り値がなく、例外を生じる場合
// let bar: never = undefined;
let bar: never = error('only me');
