import React from 'react';
import './App.css'
import Aside from './components/sideBar/SideBar';
import Main from './components/main/Main';


function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <Aside/>
        <Main/>
      </div>
    </React.Fragment>
  );
}

export default App;
