import React from 'react'
import Home from './Home'

const App = () => {
  const btnClick = (value) => {
    console.log("I got clicked!", value)
  }
  return (
    <div>
      App <Home/>
      {/* <button onClick={() => btnClick()}>Add</button> CallBack */}
      {/* <button onClick={btnClick}>Add</button> Another Method*/}
      <button onClick={() => btnClick('React')}>Add</button>
    </div>
  )
}

export default App
