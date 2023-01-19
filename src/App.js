import './App.css';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={darkMode? { backgroundColor: 'var(--black)' , color: 'white'}: {}} >
      <Navbar />
      <Intro />
      <Services />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
