{
  /**
   * Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // 이처럼 Union Type은 발생할 수 있는 모든 케이스 중에
  // 하나만 할당할 수 일을 때 사용하면 좋다.
  // 그런만큼 Union Type은 타입스크립트에서 활용도가 굉장히 높은 타입이다.

  // [실전예제01] function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason
    : string;
  };

  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      response:{
        body: 'logged in!',
      },
    };
  }

  // [실전예제02] printLoginState(state)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if ( 'response' in state ) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}