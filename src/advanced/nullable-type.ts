export {};

// ts.config.json内のstrictNullChecksがtrueになっているのでエラー発生（numberにnullを入れようとしているため）
// let profile: { name: string; age: number } = {
//   name: 'daigo',
//   age: null,
// };

// union型を用いてnullも許容する = nullable型
let profile: { name: string; age: number | null } = {
  name: 'daigo',
  age: null,
};
