// Java: Exception 클래스 존재
// Javascript: Error 클래스 존재
// const array = new Array(1000000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if(fileName === 'not exist!🔥') {
      throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents 🌈';
}

function closeFile(fileName: string) {
  //
}

const fileName = 'not exist!🔥';

// 에러가 발생할 수 있는 부분을 최대한 정확하게 선택하여
// 해당 부분만 try로 감싸주는 것이 좋다.
try {
  console.log(readFile(fileName));
} catch(err) {
  console.log(`catched!!`)
} finally {
  closeFile(fileName);
  console.log("finally!!!!")
}

console.log("!!!!!!!");
