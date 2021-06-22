{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // }

  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  }

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'hi',
    author: 'ellie',
  }

  type Animal = {
    name: string;
    age: number;
  }
  const animal: Optional<Animal> = {
    name: 'dog',
  }

  animal.name = 'cat';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'ellie',
    description: 'so funny'
  }

  // video.title = 'hello'; // 에러 발생

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // }

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  const obj2: Nullable<Video> = {
    title: 'hi',
    author: 'ellie',
    description: null,
  }

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  }

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
  }
}