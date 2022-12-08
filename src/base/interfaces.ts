export {};

// 型エイリアス
type ObjectType = {
  name: string;
  age: number;
};
let object1: ObjectType = {
  name: 'daigo',
  age: 28,
};

// インターフェース
interface ObjectInterface {
  name: string;
  age: number;
}
let object2: ObjectInterface = {
  name: 'daigo',
  age: 28,
};
