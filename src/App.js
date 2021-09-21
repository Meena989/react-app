
import React from 'react';

import {Switch,Route,BrowserRouter} from 'react-router-dom'
import Login from './components/Login';

import Dashboard from './components/Dashboard';

const App = () =>{
  return(
    <div>
      <BrowserRouter>
      <Switch>
        
      <Route exact path='/' component={Login}/>
      <Route exact path='/Dashboard' component={Dashboard}/>
      

     
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
