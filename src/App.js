import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/Navbar';
import HomeSectionTwo from './components/section/homeSectionTwo';
import HomeSectionOne from './components/section/homeSectionOne';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path= '/' exact />
      </Switch>
      <HomeSectionOne />
      <HomeSectionTwo />
      <Footer />      
    </Router>
    </>
  );
}

export default App;
