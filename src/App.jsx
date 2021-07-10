import React, { useRef } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import logo from './logo.png'
import './App.css'
import Home from './components/Home';

function App() {
  const laikaRef = useRef(null)
  const softwareRef = useRef(null)
  const tecnologiaRef = useRef(null)
  const executeScroll = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' })
  console.log(process.env.PUBLIC_URL);
  return (
    <div className="App">
      <header className={window.screen.width <= 600 ? "col App-header" : "row App-header"}>
        <img alt="Logo de HGT" src={logo} className="logo btn" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}/>
        <div className={window.screen.width <= 600 ? "col menu" : "row menu"}>
          <div className="btn" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth' })}>INICIO</div>
          <div className="btn" onClick={() => executeScroll(laikaRef)}>LAIKA</div>
          <div className="btn" onClick={() => executeScroll(softwareRef)}>SOFTWARE</div>
          <div className="btn" onClick={() => executeScroll(tecnologiaRef)}>TECNOLOGIA</div>
        </div>
      </header>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={() => <Home laikaRef={laikaRef} softwareRef={softwareRef} tecnologiaRef={tecnologiaRef} />}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
