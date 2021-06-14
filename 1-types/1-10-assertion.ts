{
  /**
   * Type Assertions
   * * 불가피한 경우가 아니면, 사용하는 것을 자제하자.
   */

  // 자바스크립트는 타입이 없기 때문에 컴파일은 어떤 값이 리턴되는지 모른다.
  // 하지만 결과적으로는 문자열을 리턴하는 함수가 있다고 가정해보자.
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();

  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ! warning

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!; // * '!' 값이 존재한다고 확신할 때!
  numbers.push(1); //

  const button = document.querySelector('class');
  if(button) {
    button.nodeValue
  }

  const button2 = document.querySelector('class')!;

}