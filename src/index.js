import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OverViewContainers from './containers/OverViewContainers';
import OfficePageContainers from './containers/OfficePageContainers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from "redux";
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import {
  ConnectedRouter,
  routerReducer
} from "react-router-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import companies from './reducers/companies';
import offices from './reducers/offices';
import filterCompany from './reducers/filterCompany';

const history = createHistory();
const rootReducer = combineReducers({
  companies,
  offices,
  filterCompany,
  router: routerReducer
})
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)


ReactDOM.render(
	<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={OverViewContainers} />
          <Route path="/company/:id" component={OfficePageContainers} />
        </div>
      </ConnectedRouter>
    </PersistGate>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
