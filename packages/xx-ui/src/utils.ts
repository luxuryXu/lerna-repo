//     1、写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
export const mySetInterVal = (fn: Function, a: number, b: number) => {
  let timeCount = 0;
  let timer: NodeJS.Timeout;

  const loop = () => {
    timer = setTimeout(() => {
      fn();
      timeCount++;
      loop();
    }, a + timeCount * b);
  }

  console.log('执行');
  loop();

  return () => {
    clearTimeout(timer);
  }
}