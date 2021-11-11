// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SplashPage from "./components/SplashPage";
import RecipeList from "./components/RecipeList";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import CreateRecipe from "./components/CreateRecipeModal"

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
          <Route path="/create">
            <CreateRecipe />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
