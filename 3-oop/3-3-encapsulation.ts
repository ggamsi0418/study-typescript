{
    type CoffeeCup = {
      shots: number;
      hasMilk: boolean;
    }

		/**
		 * 정보를 은닉할 수 있는 세 가지 방법
		 * 1. public(외부에 공개) - 따로 작성하지 않으면 알아서 public으로 인식됨
		 * 2. private(외부에 비공개) - 어떤 누구라도 접근하지 못하게 할 때 사용
		 * 3. protected - 해당 클래스를 상속한 다른 클래스 내에서는 접근이 가능하고
		 *                여전히 외부에서는 접근 불가능
		 */
    class CoffeeMaker {
  
      private static BEANS_GRAMM_PER_SHOT:number = 7; // class level
      private coffeeBeans: number = 0; // instance(object) level
  
			// makeMachine 함수를 사용하도록 하기 위해서 constructor를 private으로 설정
      private constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
      }
  
      static makeMachine(coffeeBeans: number): CoffeeMaker {
        return new CoffeeMaker(coffeeBeans);
      }

			// 클래스 내부의 coffeeBean을 변경하기 위한 함수
			fillCoffeeBeans(beans: number) {
				if (beans < 0) {
					throw new Error('value for beans should be greater than 0');
				}
				this.coffeeBeans += beans;
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

		// CoffeeMaker 클래스의 constructor가 private이기 때문에
		// makeMachine 메소드를 이용하여 인스턴스를 생성.
    const maker = CoffeeMaker.makeMachine(32);
		maker.fillCoffeeBeans(32);

    class User {

      private internalAge = 4;

      get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }

      get age(): number {
        return this.internalAge;
      }

      set age(num: number) {
        if (num < 0) {
          throw new Error('Invalid age!')
        }
        this.internalAge = num;
      }

      constructor(private firstName: string, private lastName: string) {
      }

    }

    const user = new User('Jungbin', 'Park');
    user.age = 32;
    console.log(user.fullName);
    console.log(user.age);
    console.log(user);
  
  }