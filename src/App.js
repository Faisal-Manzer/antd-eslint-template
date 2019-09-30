import React from 'react';
import {Result, Icon} from 'antd';
import './styles/app.css';

function App() {
  return (
    <div className='full-page center-hv'>
      <Result icon={<Icon type='smile' theme='twoTone' />} title='Hello World!' />
    </div>
  );
}

export default App;
