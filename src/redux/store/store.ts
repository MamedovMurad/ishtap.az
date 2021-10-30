import { applyMiddleware, createStore , compose,} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from "../reducers"


const middleware = [thunk]

const makeStore:any = () => {
    const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose
  
    return createStore(
        rootReducer,
      composeWithDevTools(applyMiddleware(...middleware))
    )
  }
/* const store =  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); */
export type IRootReducer= ReturnType<typeof rootReducer>
export default createWrapper(makeStore, {debug: true})
/* export default store */