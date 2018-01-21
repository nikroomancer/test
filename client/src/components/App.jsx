import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import * as styles from './App.less';
import List from './List/List';
import Salon from './Salon/Salon';
import Home from './Home/Home';

@CSSModules(styles)
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div styleName="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={List} />
          <Route exact path="/salon/:id" component={Salon} />
        </div>
      </BrowserRouter>
    );
  }
}
