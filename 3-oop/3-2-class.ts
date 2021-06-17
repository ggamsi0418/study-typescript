{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {

    static BEANS_GRAMM_PER_SHOT:number = 7; // class level
    coffeeBeans: number = 0; // instance(object) level

    // 클래스를 가지고 오브젝트(인스턴스)를 생성할 때 항상 호출되는 함수
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
  
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
  
      return {
        shots,
        hasMilk: false,
      };
    }

  }

  // new와 class 이름을 통해서 data를 담아 object를 생성할 수 있다.
  const maker = new CoffeeMaker(32);
  const maker2 = new CoffeeMaker(64);
  console.log(maker);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(48);
  console.log(maker3);

}