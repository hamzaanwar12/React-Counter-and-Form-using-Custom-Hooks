import { createStore } from "redux"

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {

    if (action.type === "increment")
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    else if (action.type === "decrement")
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    else if(action.type === "increase")
        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter
        }    
    else if (action.type === "toggle")
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
        
    else 
        return {
            counter: state.counter,
            showCounter: state.showCounter
        }
}


const counterStore = createStore(counterReducer)

export default counterStore


