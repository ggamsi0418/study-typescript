{
  type SuccessState = {
    result: 'success';
  };

  type NetworErrorState = {
    result: 'fail';
    reason: 'offilne' | 'down' | 'timeout';
  };

  type ResultState = SuccessState | NetworErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      // Connecting...
      return {
        result: 'success'
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // login....
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
        try {
            this.userService.login();
        } catch (err) {
          // show dialog to user
          // if(error instanceof OfflineError) {
          //   //
          // }
        }
        
    };
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);

  app.run();
}

