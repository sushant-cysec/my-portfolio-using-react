import React from 'react';
import {BrowserRouter as Router,Route
  ,Redirect,
  Switch

} from "react-router-dom";

import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Project from "./pages/Project" 
import Navbar from "./Components/navbar"
 
const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        
       <Switch>
       <Route path="/" exact>
          <Home/>
          </Route>
        <Route path="/About" exact>
          <About/>
          </Route>
        <Route path="/Contact" exact>
          <Contact/>
        </Route>
        <Route path="/Project" exact>
          <Project/>
        </Route>

        <Redirect to="/"/>
        </Switch>
        
        
      </main>
    </Router>
  )
}

export default App