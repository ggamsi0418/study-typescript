{
  /**
   * In a Singleton pattern, a class or object can only be instantiated once,
   * and any repeated calls to the object or class will return the same instance.
   * This single instance is what is refered to as a Singleton.
   */
  class Logger {
    private static instance: Logger;
    private logStore: any = [];
    private constructor() {}
    public static getInstance(): Logger {
      if(!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
    public log(item: any): void {
      this.logStore.push(item);
    }
    public getLog(): void {
      console.log(this.logStore);
    }
  }

  const userLogger = Logger.getInstance();
  userLogger.log('Log 1');
  const anotherLogger = Logger.getInstance();
  anotherLogger.log('Log2');
  userLogger.getLog();
}