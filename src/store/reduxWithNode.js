const redux = require("redux")

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


const counterStore = redux.createStore(counterReducer)
// console.log(counterStore.getState())

const counterSubscribe = ()=>
{
    let latestState = counterStore.getState();
    console.log(latestState)
}


counterStore.subscribe(counterSubscribe)
counterStore.dispatch({type:"increment"})
counterStore.dispatch({type:"decrement"})

// console.log("zxvmzkxc nvkcniofnbklfn")