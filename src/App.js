import React,{useState} from 'react';
const App = ()=>{

let newTime = new Date().toLocaleTimeString();
const[currTime,changeTime] = useState(newTime);

const newTi = ()=>{
  newTime = new Date().toLocaleTimeString();
  changeTime(newTime)
}
setInterval(newTi,1000)

  return (
  <>
    <h1> {currTime} </h1>
    {/* <button onClick={newTi}>Change Time</button> */}
  </>
  )
}
export default App;