import React from 'react';
import Main from './components/Main';
import './styles/global.css';
import Side from './components/Side';


function App() {
  return (
    <div className="grid grid-cols-12 gap-6 px-4 my-10 text-center lg:px-12 gird">
      <div className="grid-cols-12 bg-white rounded-md lg:col-span-3">
      <Side/>
      </div>
      <div className="grid-cols-12 rounded-md bg-stone-600 lg:col-span-9">
        <Main/>
      </div>
    </div>
  );
}

export default App;
