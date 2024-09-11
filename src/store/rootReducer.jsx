import { combineReducers } from "redux";
import favReducer from "./favReducer";

const rootReducer = combineReducers({
    favorites : favReducer,
});

export default rootReducer;