// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import RecipeList from "./components/RecipeList";
import GrinderList from "./components/GrinderList";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
        <Route exact path='/'>
          <SplashPage />
          </Route>
          <Route exact path="/recipe">
            <RecipeList />
          </Route>
          <Route path="/grinder">
            <GrinderList />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
