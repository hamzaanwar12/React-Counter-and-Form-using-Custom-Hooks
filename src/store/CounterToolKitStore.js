import {configureStore,createSlice} from "@reduxjs/toolkit"

const initialState = {
    counter:0,
    showCounter:true,
}

const CounterSlice = createSlice(
    {
        name: "counter",
        initialState,
        reducers: {
            increment(state){++state.counter},
            decrement(state){--state.counter},
            increase (state,action){state.counter = state.counter+action.payload},
            toggleCounter(state){
                console.log("Toggle Encountered")
                console.log(state.showCounter)
                state.showCounter = !state.showCounter
            }
        }
    }
)

const initAuth = {isAuthenticated : false}
const authenticationSlice = createSlice(
    {
        name: "authentication",
        initialState: initAuth,
        reducers: {
            login(state){state.isAuthenticated = true},
            logout(state){state.isAuthenticated = false}
        }
    }
)

//There can be Only 1 Conigurestore. Because Rdux provides with only 1 central Store
/*
const CounterStoreToolKit = configureStore({
    reducer:CounterSlice.reducer
})
*/

const CounterStoreToolKit = configureStore({
    reducer:{
        counter:CounterSlice.reducer,
        authentication:authenticationSlice.reducer
    }
})

const CounterActions = CounterSlice.actions
const authActions = authenticationSlice.actions

export default CounterStoreToolKit
export {CounterActions,authActions}

