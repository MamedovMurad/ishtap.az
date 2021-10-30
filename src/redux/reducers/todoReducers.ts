
import postcssConfig from "../../../postcss.config";
import {  REMOVE_FROM_CART } from "../actions/todoAction";

export interface IState{
    posts:number[];
}
const initialState = {
    posts:[1,2,3,4,5,6,7]
}


export const todoReducer = (state=initialState,action:REMOVE_FROM_CART)=>{
    switch (action.type) {
        case 'REMOVE_FROM_CART':
            
          return {
              ...state,
              posts:[...state.posts].filter(e=>e!==action.payload)
          }
    
        default:
            return state;
    }
}