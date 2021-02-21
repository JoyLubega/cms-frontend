import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import Header from '../components/Header';
import FilesList from '../components/FilesList';
import PresentationList from '../components/Presentations'


const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={App} path="/" exact={true} />
          <Route component={FilesList} path="/list" exact={true} />
          <Route component={PresentationList} path="/presentations" exact={true} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
