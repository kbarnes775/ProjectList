import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './components/Main/Main';

function App() {
  return (
      <div>
          <Main />
      </div>
  );
}
export default App;
