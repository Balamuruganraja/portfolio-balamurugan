
import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Foooter from './components/Foooter';

function Main() {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => {
      console.log(isOpen)
      setIsOpen(!isOpen)
  }
  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Home/>
      <About />
      <Skills/> 
      <Portfolio />
      <Contact />
      <Foooter/>
     
    </div>
  );
}

export default Main;
