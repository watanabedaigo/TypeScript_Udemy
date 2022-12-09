export {};

// ひとつひとつ型を足していくのは大変、メンテナンス性低い
// let profile: { name?: string; age?: number } = {};
// profile.name = 'daigo';
// profile.age = 28;

// インデックスシグネチャー：{ [ index : typeForIndex ]: typeForValue }
interface Profile {
  [index: string]: string | number | boolean;
}
let profile: Profile = {};
profile.name = 'daigo';
profile.age = 28;
profile.nationality = 'Japan';
profile.underTwenty = false;
