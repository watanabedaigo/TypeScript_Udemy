export {};

// record : 二つのジェネリクス型の型引数を持たせる Record<K, T>

// 型エイリアス
// litarel型
type Prefectures = 'Tokyo' | 'Chiba' | 'Osaka' | 'Kyoto';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covit19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 250 },
  Osaka: { kanji_name: '大阪', confirmed_cases: 100 },
  Kyoto: { kanji_name: '京都', confirmed_cases: 10 },
};
