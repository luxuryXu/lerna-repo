import React from 'react';
import reactDom from 'react-dom';
import { mySetInterVal } from './utils';
 
const App = () => {
  // 1
  // const myClear = mySetInterVal(() => { console.log('test') }, 1000, 500);
  // myClear()
  return (
    <div>
    1、写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
    </div>
  );
}
  
reactDom.render(<App/>, document.getElementById('root'));
