function App() {
  let array: [] = [];
  const obj: { name?: string } = {};

  type Name = string | number;

  let name1: Name = 123;

  function times(x: number): number {
    return x * 2;
  } // 숫자 들어와야하고 숫자 리턴해야함

  // type Member = [number, boolean]; // 튜플

  type Member = {
    name: string;
  };

  // type Member = {
  //   [key : string] : string;
  // }

  let john: Member = { name: 'kim' };

  class User {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  console.log(times(1));
}
