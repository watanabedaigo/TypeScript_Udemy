export {};

// 型エイリアス
type Profile = {
  name: string;
  age: number;
  nationality: string;
};

// partial
type PartialProfile = Partial<Profile>;

// partial 仕組み
// 既存の型をオプショナル、かつnullable型にしたい場合はユニオン型に追加
// in keyof で繰り返し処理で、ひとつひとつのプロパティを取り出している
type Optional<T> = { [P in keyof T]?: T[P] | undefined | null };
type OptionalProfile = Optional<Profile>;
