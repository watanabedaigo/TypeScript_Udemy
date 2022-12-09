export {};

// 型エイリアス
// 戻り値がvoidの関数の型を定義
type DebugType = () => void;
// union型を定義
type SomeType = string | number | DebugType;

// exclude : union型の特定の型を除外 Exclude<union型, 除外したい型>
type FunctionType = Exclude<SomeType, string | number>;
type NonFunctionType = Exclude<SomeType, DebugType>;
// Function : 関数の型の総称。型が関数のもの全てを含む
type TypeExcludingFunction = Exclude<SomeType, Function>;

// extract :union型の特定の型のみ抽出 Exclude<union型, 抽出したい型>
type FunctionTypeByExtract = Extract<SomeType, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeType, string | number>;

// 型エイリアス
// union型を定義
type NullableTypes = string | number | null | undefined;

// nonnullable : union型のnullとundefinedを除外
type NonNullableTypes = NonNullable<NullableTypes>;
