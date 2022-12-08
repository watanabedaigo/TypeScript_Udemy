import axios from 'axios';

export {};

const url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

const fetchData = async () => {
  // インターフェースを用いて、オブジェクトのプロパティ毎の型を定義
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  const response = await axios.get(url);
  let data: Article[] = response.data;
  // 型定義ができているか確認用コード
  // data = [
  //   {
  //     id: 1,
  //     title: 'title',
  //     description: 'description',
  //   },
  // ];
  console.log(data);
};
fetchData();
