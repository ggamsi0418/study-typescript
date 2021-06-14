{
  /**
   * Enum
   */
  // Javascript 
  const MAX_NUM = 6;
  const MAC_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
  const dayOfToday = DAYS_ENUM.MONDAY;

  // Typescript
  // 어떠한 값도 할당하지 않으면, 자동으로 0부터 할당된다.
  // 첫 번째 값에 1을 할당하면, 그 다음은 차례대로 +1씩 증가된 값이 할당된다.
  // 문자열의 경우, 모든 값에 수동으로 할당해줘야 한다.
  enum Days {
    Monday = 1,
    Tuesday,
    Wednseday,
    Thrusday,
    Friday,
    Saturday,
    Sunday // 7
  }
  
  console.log(Days.Monday);
  const day = Days.Saturday;
  console.log(day);

  // But, Typescript 내에서 enum은 되도록이면 사용하지 않는 것이 좋다.
  let day2: Days = Days.Saturday;
  day2 = Days.Tuesday;
  day2 = 123;
  console.log(day2);
  // ! enum으로 타입이 지정된 변수에 다른 어떠한 값도 할당할 수 있는 것이 문제.
  // ! 즉 enum을 사용하게 되면 타입이 정확하게 보장되지 않는다.
  
  // enum 대신 UNION 타입을 사용하면 타입을 보장하면서 사용할 수 있다.
  type Fruits = '🍎 ' | '🍊' | '🍉'
  let myFruit: Fruits = "🍉";
  // myFruit = 1; // Error 발생
}