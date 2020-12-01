//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './components/container';
import Home from './components/home';
import NavBarRx from './components/navbar';
// import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'

function App() {
  
  // useEffect(()=>{ 
  // },[])

  return (
    <>
    <NavBarRx />
    {/* <Container /> */}
    </>
    
  );

}

export default App;


/***
 * 

 <div className="container App">
        <div className="title">Bob's Hot Dogs</div>
        <div className="body">
          <p className="subtitle">Color Palette</p>
          <div className="d-flex justify-content-center">
            <div className="left">
                <div className="containingDiv">
                  <div className="longChildDiv first">
                    
                  </div>
                  <div>
                  <div className="leftSmall firstSmallDiv"></div>
                  </div>
                </div>
            </div>
            <div className="left second">
                <div className="containingDiv">
                    <div className="longChildDiv secondFirst"></div>
                    <div className="secondSmallDiv">
                        <div className="leftSmall secondSmallDiv2"></div>
                    </div>
                </div> 
            </div>
          </div>
        </div>
      </div>
      <div className="displayText">
            <p className="subtitle">Display Font</p>
            <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas semper eros nisl, sit amet facilisis velit laoreet in. Etiam lacinia at magna ac aliquam. 
            Etiam tempor lectus nec turpis dignissim, quis laoreet risus fermentum.
            Donec fermentum fermentum ipsum ac pharetra. Donec non sapien eget ex auctor vehicula. 
            Phasellus ex massa, elementum nec arcu vel, finibus porta quam. Quisque eget purus at ligula porttitor rhoncus ut in ipsum. 
            Proin auctor nulla id tempor laoreet.
            </p>
            <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas semper eros nisl, sit amet facilisis velit laoreet in. Etiam lacinia at magna ac aliquam. 
            Etiam tempor lectus nec turpis dignissim, quis laoreet risus fermentum.
            Donec fermentum fermentum ipsum ac pharetra. Donec non sapien eget ex auctor vehicula. 
            Phasellus ex massa, elementum nec arcu vel, finibus porta quam. Quisque eget purus at ligula porttitor rhoncus ut in ipsum. 
            Proin auctor nulla id tempor laoreet.
            </p>
      </div>
 */