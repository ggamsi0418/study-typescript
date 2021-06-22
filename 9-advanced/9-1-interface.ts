type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// * 공통점 ⭐️
// Object를 정의하고 타입을 할당할 수 있다.
const obj1: PositionType = {
  x: 1,
  y: 1,
};

// const obj2: PositionInterface = {
//   x: 1,
//   y: 1,
// };

// Class에서 구현이 가능하다.
class Pos1 implements PositionType {
  x: number;
  y: number;
}

// class Pos2 implements PositionInterface {
//   x: number;
//   y: number;
// }

// Extends가 가능하다.
// interface는 상속을 이용하여 확장을 하는 방식
// type은 인터섹션을 이용하여 두 가지를 묶는 방식
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPostionType = PositionType & {z: number};


// * 차이점 💥
// 오직 interface만 merge가 가능하다!
interface PositionInterface {
  z: number;
};

const object3: PositionInterface= {
  x: 1,
  y: 1,
  z: 1,
}

// Type aliases는 computed properties를 사용할 수 있다!
type Person = {
  name: string,
  age: number,
}

type Name = Person['name']; // string (다른 타입의 속성을 가져다가 사용)

// Type aliases는 기존의 타입을 새롭게 만들 수도 있고, union 타입도 구현 가능하다!
type NumberType = number;
type Direction = 'left' | 'right';