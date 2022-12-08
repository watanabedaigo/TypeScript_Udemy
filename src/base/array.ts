export {};

let numbers: number[] = [1, 2, 3];
numbers.push(4);
console.log({ numbers });

let strings: string[] = ['1', '2', '3'];
strings.push('4');
console.log({ strings });

let nijigenHairetsu: number[][] = [
  [1, 2],
  [10, 20],
];
console.log({ nijigenHairetsu });

let mix: (string | number | boolean)[] = [1, false, 'Japan', 2];
console.log({ mix });
