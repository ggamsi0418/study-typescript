{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  // Intersection Type을 사용하면 여러 가지의 타입들을 하나로 묶어서 사용할 수 있다.
  internWork({
    name: 'ellie',
    score: 1,
    employeeId: 123,
    work: () => {},
  })
}