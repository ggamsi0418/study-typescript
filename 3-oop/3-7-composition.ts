{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean; // ? => 선택적인 값
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {

    private static BEANS_GRAMM_PER_SHOT:number = 7; // class level
    private coffeeBeans: number = 0; // instance(object) level

    // 다른 class에 상속될 때 constructor가 private으로 되어있는 경우, 상속될 수가 없다.
    // 그래서 constructor를 public으로 바꾸거나 자식 클래스에서도 접근 가능한 protected로 변경해야 한다.
    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider,
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🚿");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preHeat(): void {
      console.log("heating up... 🔥")
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);

      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();

      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }

  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some mkik... 🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 고급 우유 거품기
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy Steaming some mkik... 🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 특수 우유 거품기
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Cold Steaming some mkik... 🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 우유 없이!
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from candy 🍭');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  // 리얼 설탕 제조기
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some real sugar from jar!!!!');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  // 설탕 없이!
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }


  // Milk
  const chepMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // Machine
  const sweetCnadyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);


  const latteMachine = new CoffeeMachine(12, chepMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12,  coldMilkMaker, noSugar);

  const sweetCaffeLatteMachine = new CoffeeMachine(12, chepMilkMaker, candySugar);

}