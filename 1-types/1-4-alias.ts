{
  /**
   * Type Alias
   * 새로운 타입을 내가 새로 정의할 수 있다!
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'Korea';

  // 원시타입 뿐만 아니라 오브젝트 형태의 타입도 정의할 수 있다!
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'ellie',
    age: 32
  }

  /**
   * String Literal Types
   * 타입을 문자열로도 지정할 수 있다.
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name'; // 다른 문자열을 담을 수가 없다!
  type JSON = 'json';
  const json: JSON = 'json'

  // 문자열 뿐만 아니라 boolean으로도 타입을 지정할 수 있다.
  type Boal = true;
  const isCat: Boal = true;
}