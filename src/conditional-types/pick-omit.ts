export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// pick : 特定のプロパティのみ抽出
// ジェネリクスで型引数を指定 Pick<型エイリアス（オブジェクト）, 取得したい型>
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// omit : 特定のプロパティを除外
// ジェネリクスで型引数を指定 Omit<型エイリアス（オブジェクト）, 除外したい型>
type SmallProfile = Omit<DetailedProfile, 'height'>;
// 仕組み
type MyOmit = {
  [P in Exclude<'name' | 'height' | 'weight', 'height'>]: DetailedProfile[P];
};
type MySmallProfle = MyOmit;
