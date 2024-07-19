import { useState } from 'react'  //very very important
import './App.css'

function App() {
   let [countval,set_it]=useState(10)  //initial value is 5

  const incfun=()=>{  //ha arrow function since button me hum as a object pass krte h
    console.log("clicked",countval);
    countval=countval+1
    if(countval>20){  //assignment ki value 20 se upar na jaaye
      countval=20
    }
    set_it(countval)
  }
  const decfun=()=>{
    console.log("clicked",countval);
    countval=countval-1
    if(countval<0){ //assignment ki value 0 se niche na jaaye
      countval=0
    }
    set_it(countval)
  }
  return (
    <div class="cont">
      <h1 class="btn1" >COUNTER PROJECT</h1>
      <h2 class="btn2" >Counter value: {countval}</h2>
      <button class="btn3" onClick={incfun}>Increase </button>
      <button class="btn4" onClick={decfun}>Decrease </button>
    </div>
  )
}

export default App
