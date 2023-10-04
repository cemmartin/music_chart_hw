import { useState } from 'react'
import './App.css'
import ListContainer from './containers/ListContainer'

function App() {
  return (
    <div className='container'>
      <h1><u>UK Top 20</u></h1>
      <ListContainer/>
      <br></br>
    </div>
  )
}

export default App
