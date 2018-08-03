import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OverViewContainers from './containers/OverViewContainers';
import OfficePageContainers from './containers/OfficePageContainers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from "react-router-redux";

import companies from './reducers/companies';
import offices from './reducers/offices';
import filterCompany from './reducers/filterCompany';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
		companies,
		offices,
		filterCompany,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);


ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
      <div>
				<Route exact path="/" component={OverViewContainers} />
        <Route path="/company/:id" component={OfficePageContainers} />
      </div>
    </ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
