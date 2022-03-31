import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Quiz from './Quiz';

const App = function () {
  return (
    <Quiz/>
  );
};

render(<App />, document.getElementById('app'));