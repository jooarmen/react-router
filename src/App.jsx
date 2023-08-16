import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'




function App() {

  return (
    <>
      <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link className='link' to="/blue">BLUE</Link>
        <Link className='link' to="/red">RED</Link>
        <Link className='link' to="/home">HOME</Link>
      </div>
       <div id="main-section">
        <Routes>
          <Route path="/blue" Component={Blue}/>
          <Route path="/red" Component={Red}/>
          <Route path="/home" Component={Home}/>
        </Routes>
        </div>
    </div>
    </>
  )
}

export default App
