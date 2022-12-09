export {};

const degubProfile = (name: string, age: number) => {
  console.log({ name, age });
};
degubProfile('daigo', 28);

// profile : 関数の引数の型を取得することができる
// Parameters<typeof 関数>
type Profile = Parameters<typeof degubProfile>;
const profile: Profile = ['diego', 20];
degubProfile(...profile);
