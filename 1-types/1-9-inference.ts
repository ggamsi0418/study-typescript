{
  /**
   * Type Inference
   */
  let text = "hello";

  function print(message = 'hello') {
    console.log(message);
  } // 인자를 default로 문자열을 사용했기 때문에 변수 message의 타입은 string으로 유추.

  function add(x: number, y: number) {
    return x + y;
  } // 숫자끼리 더한 결과를 return하기 때문에 자동으로 add 함수의 리턴 값을 숫자 타입으로 추론한다.

  const result = add(1, 2); // add 함수는 숫자를 리턴하기 때문에 변수 result 타입은 자동으로 숫자 타입이 된다.

  // 원시 타입의 경우 변수가 확실히 구분되기 때문에 타입 설정이 생략되기도 하지만,
  // function 등에서는 코드가 복잡해지기 때문에 타입 선언을 명확하게 해주는 것이 좋다.
}