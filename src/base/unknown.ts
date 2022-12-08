export {};

const kansu = (): number => {
  return 28;
};

const numberAny: any = kansu();
const numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// 'numberUnknown' is of type 'unknown' 解消方法、型ガード。型にふさわしい処理を進める。
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
