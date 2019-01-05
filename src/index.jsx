import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from 'components/Menu';
import Container from 'components/Container';
import itemsMenu from './source/itemsMenu';

import routes from './routes';

class App extends Component {

  render() {
    return (
      <Container>
        <Menu items={itemsMenu} titleBlog={"React blog"}/>
        <div className="row mt-5">
          <div className="col-8 mb-5">
            <Switch>
              {routes.map((route, idx) => <Route key={idx} {...route} />)}
            </Switch>
          </div>
          <div className="col-4">
            {/*<TopPostsContainer/>*/}
          </div>
        </div>
      </Container>
    )
  }
}

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
