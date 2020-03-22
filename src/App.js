import React, { Fragment } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className='content'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          modi, porro eligendi quos ipsa ipsam eveniet culpa quis in perferendis
          provident accusamus dolorum recusandae, deserunt ut atque totam
          deleniti! Labore.
        </p>
      </div>
    </Fragment>
  );
}

export default App;
