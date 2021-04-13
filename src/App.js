import react from 'react';
import {Router} from 'react-router-dom';

import Home from './pages/Home';
import Recruit from './pages/Recruit';
import Resume from './pages/Resume';
import MyInfo from './pages/MyInfo';
import Clause from './pages/Clause';
import Policy from './Pages/Policy';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/recruit' component={Recruit}/>
      <Route exact path='/resume' component={Resume}/>
      <Route exact path='/user' component={MyInfo}/>
      <Route exact path='/clause' component={Clause}/>
      <Route exact path='/policy' component={Policy}/>
    </Router>
  );
}

export default App;
