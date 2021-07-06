import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Home'
import About from './About'
import Project from './Project'
import NavBar from './NavBar'
import WebsiteProject from './WebsiteProject'
import PackageScanner from './PackageScanner'

import { Route } from "react-router-dom";

import { Helmet } from 'react-helmet'



function App() {
  return (
    <div class="container" className="App">
      <div class=" container outside-box">
          <div class="inside-box">
          <Helmet>
            <title> Stanley Yip </title>
            <meta name="Description"
                  content="Hi! My name is Stanley Yip and I am from the University of Waterloo. I love to build things."
            />
          </Helmet>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/about" component={About} />
            <Route path="/webproject" component={WebsiteProject} />
            <Route path="/packagescanner" component={PackageScanner} />
          </div>
      </div>
    </div>
  );
}

export default App;

