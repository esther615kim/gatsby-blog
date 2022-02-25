import React from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './styles/global.css';

function App() {
  return (
    <div className="grid grid-cols-12 gap-6 px-4 my-10 text-center lg:px-12 gird">
      <div className="grid-cols-12 bg-white rounded-md lg:col-span-3">
        <Sidebar/>
      </div>
      <div className="grid-cols-12 bg-white rounded-md lg:col-span-9">
        <Main/>
      </div>
    </div>
  );
}

export default App;
