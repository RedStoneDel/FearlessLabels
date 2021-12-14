import React, {useState, useEffect} from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Switch, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Artists from './pages/artists';
import Dropdown from './components/Dropdown';

function App() {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
  setIsOpen(!isOpen);
  console.log("Hi");
}

  return (
      <>
        <Navbar toggle={toggle}></Navbar>
        <Dropdown toggle={toggle} isOpen={isOpen}></Dropdown>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/artists' component={Artists}></Route>
        </Switch>
        <Footer></Footer>
      </>  
  );
}

export default App;
