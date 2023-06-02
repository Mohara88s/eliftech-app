import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';


import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.css';

import ShopPageView from './views/ShopPageView/ShopPageView';
// const ShopPageView = lazy(() =>
//   import(
//     './views/ShopPageView/ShopPageView.js' /* webpackChunkName:"ShopPageView" */
//   ),
// );
const ShoppingCartView = lazy(() =>
  import(
    './views/ShoppingCartView/ShoppingCartView.js' /* webpackChunkName:"ShoppingCartView" */
  ),
);

const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView' /* webpackChunkName:"NotFoundView" */
  ),
);

function App() {
 

  return (
      <div>
        <AppBar />
        <Container>
          <Suspense fallback={<Spinner animation="border" variant="primary" />}>
            <Switch>
              <Route exact path="/eliftech-app/">
                <ShopPageView />
              </Route>

              <Route exact path="/shopping-cart">
                <ShoppingCartView />
              </Route>

              {/* <Route exact path="/history">
                <HistoryPageView />
              </Route>

              <Route exact path="/coupons">
                <CouponsPageView />
              </Route> */}

              <Route>
                <NotFoundView />
              </Route>
            </Switch>
          </Suspense>
        </Container>
      </div>
  );
}

export default App;
