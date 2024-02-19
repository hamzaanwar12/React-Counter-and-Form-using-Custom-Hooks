import "./Counter.css"
import { useSelector,useDispatch } from "react-redux";
import { CounterActions } from "./store/CounterToolKitStore";
const Counter = ()=>
{
    /*
    //ONLY fro Redux
    const counter = useSelector(state=>state.counter)
    const show = useSelector(state=>state.showCounter)
    
    const dispatch = useDispatch()

    const handleIncrement = ()=>dispatch({type:"increment"})
    const handleDecrement = ()=>dispatch({type:"decrement"})
    const handleIncrease = ()=>dispatch({type:"increase",value:10})
    const handleToggle = ()=>dispatch({type:"toggle"})

    */

        
    //ONLY for Redux ToolKIt only for Counter 
    /*
    const counter = useSelector(state=>state.counter)
    const show = useSelector(state=>state.showCounter)
    */

    const counter = useSelector(state=>state.counter.counter)
    const show = useSelector(state=>state.counter.showCounter)

    const dispatch = useDispatch()

    const handleIncrement = ()=>dispatch(CounterActions.increment())
    const handleDecrement = ()=>dispatch(CounterActions.decrement())
    const handleIncrease = ()=>dispatch(CounterActions.increase(10))
    const handleToggle = ()=>
    {
        
        console.log("show +" +  show)
        dispatch(CounterActions.toggleCounter())
    }
    
    return(
        <div className="counter">
            <h2>Redux Counter</h2>
            
            <div className="show">
            {show &&
                <>
                    <h1>{counter}</h1>
                    <div className="buttons">
                        <button onClick={handleIncrement}>Increment</button>
                        <button onClick={handleDecrement}>Decrement</button>
                        <button onClick={handleIncrease}>Increase by 10</button>
                    </div>
                </>
            }
                 <div className="toggel">
                    <button className="toggle" onClick={handleToggle}>Toggle Counter</button>
                 </div>
            </div>
            
        </div>
    )
}

export default Counter