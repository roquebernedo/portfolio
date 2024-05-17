import { BrowserRouter as Router } from "react-router-dom";
import Presentacion from './Presentacion';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import { useState } from "react";

function App() {
  const [change, setChange] = useState(true)

  const changeLanguageToEnglish = () => {
    if(change === false){
      setChange(!change) // tiene que ser verdad para que funcione
      console.log(change)
    }
  }

  const changeLanguageToSpanish = () => {
    if(change === true){
      setChange(!change) // tiene que ser falso para que funcione
      console.log(change)
    }
  }
  return (
    <div className='App'>
      <Router>
        <Presentacion 
          change={change} changeLanguageToEnglish={changeLanguageToEnglish} changeLanguageToSpanish={changeLanguageToSpanish}/>
        <Skills change={change} />
        <Projects change={change} />
        <About change={change} />
        <Contact/>
      </Router>
    </div>
  );
}

export default App;

