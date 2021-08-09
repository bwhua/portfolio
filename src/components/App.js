import React from 'react'
import NavBar from './NavBar';
import About from './About';
import Proficiencies from './Proficiencies';
import Education from './Education';
import Work from './Work';
import Home from './Home';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Home />
      <About />
      <Proficiencies/>
      <Education />
      <Work />
    </div>
  )
}
 
export default App
