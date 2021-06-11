{
  // Array 선언 방식 두 가지
  const fruits: string[] = ['🍇', '🍊'];
  const scoures: Array<number> = [1, 2, 3, 4];

  // Array를 선언하는 두 가지 방식은 성능상에 차이는 없다.
  // 단, 'readonly' 키워드를 사용하기 위해서는 첫 번째 방식으로만 가능하다.
  // readonly는 object의 불변성을 지키기 위해서 사용한다.
  function printArray(fruits: readonly string[]) {}

  // Tuple
  // 튜플은 배열이긴 하지만, 서로 다른 타입을 함께 가질 수 있는 배열이다.
  // 사이즈는 고정되어 있으며, 서로 다른 타입을 가지고 있을 때 사용한다.
  let student: [string, number];
  student = ['name', 123];

  // student = ['name', 123, 'a']; // Error!
  // student = [123, 'name']; // Error!

  // 인덱스로 접근해서 사용하는 것이 불편하기 때문에
  // 대체적으로 튜플은 `interface`, 'type alias', 'class'로 대체해서 사용한다.
  student[0]; // name
  student[1]; // 123

  // 물론 다음과 같이 사용할 수도 있다. (Destructuring)
  const [name, age] = student;

  // 내가 무언가를 동적으로 리턴하는데,
  // 클래스나 인터페이스로 묶기에 애매하고 동적으로 뭔가 관련있는 데이터를 묶어서
  // 사용자가 이름을 정의해서 사용할 경우에는 '튜플'이 유용할 수 있다.
  // 하지만 이와 같은 경우가 아니라면, 최대한 사용하지 않도록 하자
  // 일반적인 타입을 정의하고 사용하는 경우에는
  // 내가 혹시 Interface나 Type alias로 쓸 수 있지는 않을지 잘 생각해봐야 한다. 
}