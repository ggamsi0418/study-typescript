{
  // Javascript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript
  function add(num1: number, num2:number): number {
    return num1 + num2;
  }

  // Javascript
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript
  function tsFetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Javascript => Typescript
  // Optional parameter [?]
  // 해당 인자는 전달하거나 전달하지 않아도 된다.
  // 'lastName 문자열로 전달하거나 전달하지 않아도 된다.'
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Anna', undefined);
  
  // Default parameter [=]
  // 해당 인자를 전달하지 않으면, default 값이 들어간다.
  function printMessage(message: string = 'default message') {
    console.log(message);
  }

  printMessage();

  // Rest parameter [...]
  function addNumbers(...numbers: Array<number>): number {
    return numbers.reduce((a, b) => a + b);
  }

  // 또는
  function addNumbers2(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6, 7));

}