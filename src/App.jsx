import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function App() {
  

  return (
    <div className="App">
         {/* Header */}
          <Header></Header>
          <Outlet></Outlet>
         {/* Footer */}
    </div>
  )
}

export default App
