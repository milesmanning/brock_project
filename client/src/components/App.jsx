import React from 'react';
import Test from './Test.jsx'

export default function App(props) {
  var content = (
    <div>
      <h1>
        Hello World
      </h1>
      <br></br>
      <div className='test'>
        <Test example='aw;kDIBF' />
      </div>
    </div>
  );
  return content; 
};
