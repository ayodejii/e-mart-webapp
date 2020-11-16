//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './components/container';
import Home from './components/home';
import NavBarRx from './components/navbar';
import loginData from './Data/loginData.json'
// import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'

function App() {
  const [state, setState] = useState({
    password: "",
    username: "",
    isLogged: false,
    isAdmin: false,
    errors:{
      username: "", password: ""
    }
  })
  useEffect(() => {
    let logged = localStorage.getItem('user');
    if(logged){
    const loggeduser = JSON.parse(logged);
      setState(loggeduser)
    }
  }, [])
  const handleChange = (event) => {
    const {name, value} = event.target;
    let errors = {...state.errors}
    switch (name) {
      case 'username':
        errors.username = value.length > 5 ? 
        '' : 'username must be at least five chars'
        break;
      case 'password':
        errors.password = value.length > 5 ? 
        '' : 'password must be at least five chars'
      default:
        break;
    }
    setState({...state, errors, [name]: value});
  }

  const handleLogout = () => {
    localStorage.clear()
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = {...state};
    const user = loginData.filter(x => x.username === username && x.password === password)[0];
    if (user) {
      user.isLogged = true;
      //isAdmin = user.isAdmin
      setState(user)
      localStorage.setItem('user', JSON.stringify(user))
    }
  } 

  return (
    <>
    <NavBarRx 
    handleChange={handleChange} 
    handleSubmit={handleSubmit} 
    logstate={state}
    handleLogout={handleLogout}
    />
    <Container />
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