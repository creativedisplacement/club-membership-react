import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { AddMember } from './components/AddMember';
import { EditMember } from './components/EditMember';
import { GlobalProvider } from './context/GlobalState';
import './stylesheets/App.css';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/add' component={AddMember} exact />
          <Route path='/edit/:id' component={EditMember} exact />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
