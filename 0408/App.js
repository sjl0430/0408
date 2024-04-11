import React from 'react';
import PlusMinus from './0408/PlusMinus';
import Name from './0408/Name';
import Money from './0408/Money';
import { Memo } from './0408/Memo';

function App() {
  return (
    <div>
      <Name name='홍길동' colorName='파란색' color='blue'/>
      <PlusMinus/>
      <Money bank='부산은행'/>
      <Memo/>
    </div>
  );
}

export default App;

//src/App.js에 붙여넣기