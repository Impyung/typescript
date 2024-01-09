function prac1() {
  let 이름 = 'kim';
  let age: number = 12;
  let tf: boolean = true;

  let cos: string[] = ['lim', 'park']; // 문자가 들어간 array만 가능
  // 여러가지 형식 혼용하려면 Union type

  const obj: { member1: string; member2: string } = {
    member1: 'kim',
    member2: 'park',
  };
}

function example() {
  let 이름 = '이태희';
  let age = 28;

  const obj: { name: string; title: string } = {
    name: 'yorushika',
    title: 'chinokate',
  };

  let project: { member: string[]; days: number; started: boolean } = {
    member: ([] = ['kim', 'park']),
    days: 30,
    started: true,
  };
}

function prac2() {
  let 회원: number | string = 123; // Union type
  회원 = 'str';

  let 회원들: (string | number)[] = [1, '2', 3];
  let obj: { a: string | number } = { a: 123 + 'a' };

  let 아무거나: any;
  let unk: unknown; // any랑 비슷한 용도인데, ts문법이 해제되지는 않음
  // unk -1 도 안됨

  let 나이: string | number; // 나이 -1 안됨 str | num은 union 타입이라 그럼
}

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string[] | string;
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];

function times(x?: number): number {
  return x * 2;
}

times(5);

// void: return이 없음

// js와 달리 parameter를 타입지정된 지정해야함?없으면 아래꺼 찐빠남
// ? => | undefined로 나오는 union type로 지정되는거임
times();

function test1(name?: string): string {
  if (name) {
    return name;
  } else return '이름이아님';
}

console.log(test1('뮤뮤미'));

function test2(l: number | string): number {
  if (l) {
    return l.toString().length;
  }
}

console.log(test2(123456));

function test3(l: number, r: boolean, x: string): string | number {
  let a = Math.floor(l);
  let temp: number;
  let temp2: number;
  if (r === true) {
    temp = 500;
  } else {
    temp = 0;
  }
  if (x === '상') {
    temp2 = 100;
  } else temp2 = 0;

  if (a + temp + temp2 > 600) {
    return '가능';
  } else return 'ㅠㅠ';
}

console.log(test3(50, false, '상'));
