import './style.scss';

import React from 'react';

export const Wizard = ({name}) => (
  <form className="form">
    <input className="input" type="text"/>
    <input className="submit" type="submit"/>
  </form>
);
