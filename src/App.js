import './App.css';
import Com from './component/Com';


let Cap3=()=>{
  return(
    <>
        <div className="box3">Deepak</div>
    </>
  )
}

function Cap4(){
  return <div className="box4">Prajapti</div>
}

var Cap5=()=>{
  return(
    <>
        <div className="box5">Grrren</div>
        <Cap4 />
    </>
  );
}

function App() {
  return (
    <>
        <Cap3 />
        <Cap5 />
        <div>
          <Com />
        </div>
    </>
  );
}

export default App;
