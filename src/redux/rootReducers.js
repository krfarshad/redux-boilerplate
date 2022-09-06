import initialState from "./initialState";
import * as type from './actionTypes'
const rootReducer = (state = initialState , action) =>{
    switch(action.type){
        case type.DECREASE_NUMBER :
            return state -1;
        case type.INCREASE_NUMBER :
            return state +1;
        case type.RESET_NUMBER : 
            return initialState;
        default :
        return initialState;
    }
}
export default rootReducer;


// you can combine multiple reducers I take it in mergeReducers.js in sibling