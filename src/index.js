import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Com2C from './component/Com2C';


function Cap2(){
  return <div className="box1">A</div>
}

let Cap=()=>{
    return( 
    <>
        <div className="box">23</div>
        <Com2C />
    </>
  );
}

function Appp(){
    return( 
      <>
          <div>Hellow</div>
          <Cap />
          <Cap2 />
      </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appp />
    <App />
  </React.StrictMode>
);

