import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <StreamList />} />
          <Route exact path="/streams/create" render={() => <StreamCreate />} />
          <Route exact path="/streams/show" render={() => <StreamShow />} />
          <Route exact path="/streams/edit" render={() => <StreamEdit />} />
          <Route exact path="/streams/delete" render={() => <StreamDelete />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
