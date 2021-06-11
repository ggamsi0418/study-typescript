{
  /**
   * Javascript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array..
   */

  // number
  const num: number = 1; // 양수, 음수, 소수 모두 가능

  // string
  const str: string = 'hello';

  // boolean
  const bool: boolean = false; // 숫자 0 또는 1 사용 불가

  //undefined: 값이 있는지 없는지 아무 것도 결정되지 않은 상태
  let name: undefined; // 왼쪽같이 사용하면 재할당이 안되기 때문에 사용하지 않는 방법
  let age: number | undefined; // Union type => '|(또는)'를 이용하여 복수의 타입을 설정
  age = undefined;
  age = 1;

  // null: 해당 사항을 비어있음을 명확하게 표시
  let person: null; // 위와 같은 이유로 단독으로 타입을 설정하지 않음
  let person2: string | null;

  // 보통 '있거나 없음'을 나타날 때 null 보다는 undefined를 많이 사용하는 편.
  function find(): number | undefined {
    return undefined
  }

  // unknown
  // 타입을 확실히 모른다는 의미로 사용할 수 있다.
  // 그렇기 때문에 너무 추상적이고 두루뭉술하기 때문에 가급적 사용하지 않는 것이 좋다!
  // 그렇다면 왜 존재하는가? 타입스크립트는 타입이 없는 자바스크립트와 연동해서 사용할 수 있기 때문이다.
  // 
  let notSure: unknown = 0;
  notSure = 'hi';
  notSure = true;

  // any
  // 어떠한 타입이든 사용가능하다는 의미.
  // 이 역시 가능하면 사용하지 않는 것이 좋다!
  let anything: any = 0;
  anything = 'hello';

  // void
  // 함수에서 아무 것도 리턴하지 않은 경우! (생략 가능)
  function print(): void {
    console.log('hello');
    return;
  }

  // 선언형으로 함수를 작성하면 void는 사용하지 않는다.
  // undefind로 할당할 수밖에 없기 때문에 활용성이 떨어진다!
  let unusable: void = undefined;

  // never
  // 리턴하지 않는 함수!
  // 절대 다른 것을 리턴할 수 없으며, 에러를 던지거나 끝나지 않는 코드를 작성해야 한다.
  // 즉 절대 리턴되지 않는 함수임을 명시하기 위해서 사용.
  function throwError(message: string): never {
    throw new Error(message);
  }

  function infiniteLoop(): never {
    while(true) {
      // abcde
    }
  }

  let neverEnding: never; // 다음과 같이 사용하는 경우는 절대 없다!!

  // object
  // 원시 타입(Primitive)을 제외한 모든 오브젝트 타입을 할당할 수 있다.
  // 이 역시 광범위한, 추상적인, 어떠한 것이든 담을 수 있는 타입이기 때문에 가급적 사용하지 않는다!
  let obj: object = [1, 4];
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie'});
  acceptSomeObject({ animal: 'dog'});
}