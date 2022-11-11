import rootReducer from "./Reducer/Reducer";
// import { createStore } from "redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
// const logger = ({ getState }) => {
//    return (next) => (action) => {
//       console.log("will Dispatch", action);
//       const returnValue = next(action);

//       console.log("state after dispatch", getState());
//       return returnValue;
//    };
// };
const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(rootReducer);

export default store;
