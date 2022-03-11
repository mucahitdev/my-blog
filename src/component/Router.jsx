import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import Home from './Home';
import About from './About';
import Header from './Header';
import Contact from './Contact';
import Projects from './Projects';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*"  element={ <Header /> } >
            <Route path='' element={ <Home /> } />
            <Route path='about' element={ <About/> } />
            <Route path='contact' element={ <Contact/> } /> 
            <Route path='projects' element={ <Projects/> } />
            <Route path='*' element={ <Home /> }/>
         </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router