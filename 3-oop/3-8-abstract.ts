{
    type CoffeeCup = {
      shots: number;
      hasMilk?: boolean;
      hasSugar?: boolean; // ? => 선택적인 값
    }
  
    interface CoffeeMaker {
      makeCoffee(shots: number): CoffeeCup;
    }
  
    abstract class CoffeeMachine implements CoffeeMaker {
  
      private static BEANS_GRAMM_PER_SHOT:number = 7; // class level
      private coffeeBeans: number = 0; // instance(object) level
  
			// 다른 class에 상속될 때 constructor가 private으로 되어있는 경우, 상속될 수가 없다.
			// 그래서 constructor를 public으로 바꾸거나 자식 클래스에서도 접근 가능한 protected로 변경해야 한다.
      constructor(coffeeBeans: number) {
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
  
      protected abstract extract(shots: number): CoffeeCup;
  
      makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preHeat();
        return this.extract(shots);
      }
  
    }

		class CaffeLatteMachine extends CoffeeMachine {
			constructor(beans: number, public readonly serialNumber: string) {
				super(beans);
			}

			private steamMilk(): void {
				console.log('Steaming some mkik... 🥛');
			}
			
      protected extract(shots: number): CoffeeCup {
        this.steamMilk();
        return {
          shots,
          hasMilk: true,
        }
      };
		}
  
    class SweetCoffeeMaker extends CoffeeMachine {
      protected extract(shots: number): CoffeeCup {
        return {
          shots,
          hasSugar: true,
        }
      };
    }

		const machines: CoffeeMaker[] = [
      new CaffeLatteMachine(16, 'DREAM-CODING-1004'),
      new SweetCoffeeMaker(16),
      new CaffeLatteMachine(16, 'DREAM-CODING-1004'),
      new SweetCoffeeMaker(16),
    ];
    
    machines.forEach(machine => {
      console.log('----------------------------------------');
      machine.makeCoffee(1);
    });

}