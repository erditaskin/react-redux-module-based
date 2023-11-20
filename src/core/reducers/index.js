import { combineReducers } from "redux";
import { combineModuleReducers } from "core/helpers";
import modules from "modules";

export default combineReducers({
  ...combineModuleReducers(modules),
});
