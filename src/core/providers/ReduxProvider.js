import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducer from "../reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(reduxThunk))
);

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
