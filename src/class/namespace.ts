export {};

// namespaceを指定することで、同じクラス名でもエラーが発生しなくなる
// インスタンス化させるためにはexportする必要があるので注意
namespace Japanese {
  // namespaceのネストは可能
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstname: string,
      public lastName: string,
      public age: number
    ) {}
  }
}

// インスタンス作成
// namespaceで囲ったクラスをインスタンス化する際は、記述方法に注意が必要
const daigo = new Japanese.Tokyo.Person('daigo');
console.log(daigo.name);

const diego = new English.Person('watanabe', 'diego', 28);
console.log(`${diego.firstname} ${diego.lastName} / ${diego.age}`);
