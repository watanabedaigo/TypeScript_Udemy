export {};

// utility tpes : TypeScriptが標準で用意してくれている便利な型

// 型エイリアス
type Profile = {
  name: string;
  age: number;
  nationality: string;
};

// partial : 既存の型を参照し、全てのプロパティをオプショナリーに変更した型を、新たに作成してくれる
// ジェネリクスで型引数を指定
type PertialType = Partial<Profile>;

// 型エイリアス
type Profile２ = {
  name: string;
  age?: number;
  nationality: string;
};

// required : 既存の型を参照し、全てのプロパティをオプショナリーから必須に変更した型を、新たに作成してくれる
// ジェネリクスで型引数を指定
type requiredType = Required<Profile２>;
