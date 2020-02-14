import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

//

import searchReducer from "./reducers/searchReducer";

const middleware = [thunk];

const store = createStore(
  searchReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;