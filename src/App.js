import './App.css';
import Intro from './sections/Intro';
import Navbar from './components/Navbar';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
    style={{background:darkMode? 'black':'',
    color:darkMode? 'white':''
    }}

    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
