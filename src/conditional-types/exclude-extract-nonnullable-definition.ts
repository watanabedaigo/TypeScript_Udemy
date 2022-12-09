export {};

type DebugType = () => void;
type SomeType = string | number | DebugType;
type FunctionType = Exclude<SomeType, string | number>;

// exclude 仕組み
type MyExclude<> =
  // Conditional Types : T extends U ? A : B = TがUに代入可能であれば、A型、そうでなければB型を返す
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType);
type MyFunctionType = MyExclude;
