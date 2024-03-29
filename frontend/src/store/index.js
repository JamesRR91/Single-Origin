import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import recipeReducer from "./recipes";
import commentReducer from "./comments";
import likeReducer from "./like";
import grinderReducer from "./grinder";
import reviewReducer from "./review";

const rootReducer = combineReducers({
  session: sessionReducer,
  recipe: recipeReducer,
  comment: commentReducer,
  like: likeReducer,
  grinder: grinderReducer,
  review: reviewReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
