export {};

// class
class Me {
  // インスタンスを作成する必要がない場合は、staticを用いて静的メンバを作成する。すると、外部からクラス内のプロパティ、メソッドにアクセスできる。
  static isProgrammer: boolean = true;
  static firstName: string = 'Watanabe';
  static lastName: string = 'Daigo';

  // method
  static work(): string {
    // クラス名に依存している（Me.プロパティでアクセスしているため）
    // return `enjoy study!!! by ${Me.lastName} ${Me.firstName} `;
    // クラス名に依存していない（this.プロパティでアクセスしているため）
    return `enjoy study!!! by ${this.lastName} ${this.firstName} `;
  }
}

console.log(Me.work());
