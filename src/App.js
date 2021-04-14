import React, { useCallback, useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './component/Header';
import ChatTab from './component/ChatTab';
import Login from './component/popup/Login';

import { createGlobalStyle } from 'styled-components';

import Home from './pages/Home';
import Recruit from './pages/Recruit';
import Resume from './pages/Resume';
import MyInfo from './pages/MyInfo';
import Clause from './pages/Clause';
import Policy from './pages/Policy';
import { AuthProvider } from './context/auth';

function App() {

  const [loginPop, setLoginPop] = useState(false);
  
  const callbackFunc = useCallback((flag) => setLoginPop(flag));

  return (
    <AuthProvider>
      <Router>
        <Container/>
        <Header callbackFunc={callbackFunc}/>
        {loginPop ? (
          <>
            <Login/>
          </>
          ):(
          <>

          </>
        )}
        <Route exact path='/' component={Home}/>
        <Route exact path='/recruit' component={Recruit}/>
        <Route exact path='/resume' component={Resume}/>
        <Route exact path='/user' component={MyInfo}/>
        <Route exact path='/clause' component={Clause}/>
        <Route exact path='/policy' component={Policy}/>
      </Router>
    </AuthProvider>
  );
}

const Container = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  div {
    display: block;
  }
  body {
    font-weight: 400px;
    font-size: 14px;
    line-height: 1rem;
    background-color: #ffffff;
  }
`;

export default App;
