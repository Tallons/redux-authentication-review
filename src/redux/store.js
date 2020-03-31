import {createStore} from "redux";
import reducer from "./reducer"

export default createStore(reducer);

// import {createStore, combineReducers} from "redux";
// import reducer from "./reducer"
// import reducer2 from "./reducer2"

// const rootReducer = combineReducers({
//    reducer: reducer,
//    reducer2: reducer2
// })
// export default createStore(rootReducer);