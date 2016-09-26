import './src/styles/page.scss';
import { Wizard } from  './src/components/wizard/index.jsx';

import React from 'react';
import ReactDOM from 'react-dom';

const onSubmit = (e) => {
  e.preventDefault();
  console.log('this', this);
  console.log('e', e);
  return false;
};

const Page = ({name}) => (
  <div className='header'>
    <h1 className='header-text'>{name} Web Project</h1>
    <Wizard />
    <form onSubmit={onSubmit}>
      <input type="text"/>
      <input type="submit"/>
    </form>
  </div>
);

ReactDOM.render(
  <Page name="Cocoon" />,
  document.getElementById('app'),
);
