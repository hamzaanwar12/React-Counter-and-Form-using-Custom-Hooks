import { useSelector,useDispatch} from "react-redux"
import { authActions } from "./store/CounterToolKitStore"
const Header = ()=>
{
    const dispatch = useDispatch()
    const auth = useSelector(state=>state.authentication)
    
    const handleLogout = ()=>dispatch(authActions.logout())
    return(
        <nav>
            <h1>React Auth</h1>
            
            {auth.isAuthenticated
                &&
            <ul>
                <li>My Product</li>
                <li>My Sales</li>
                <button onClick={handleLogout}>Log Out</button>
            </ul>
            }
        </nav>
    )
}
export default Header;