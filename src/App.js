import { BrowserRouter as Router } from "react-router-dom";
import Presentacion from './Presentacion';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <div className='App'>
      <Router>
        <Presentacion/>
        <Skills />
        <Projects/>
        <About/>
        <Contact/>
      </Router>
    </div>
  );
}

export default App;

