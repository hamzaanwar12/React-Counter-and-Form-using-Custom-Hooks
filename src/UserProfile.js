import { useSelector,useDispatch} from "react-redux"
import { authActions } from "./store/CounterToolKitStore"
const UserProfile = ()=>
{
    const auth = useSelector(state=>state.authentication)

    const dispatch = useDispatch()

    return(
        <>
            {
                auth.isAuthenticated
                &&
                <div className="authentication">
                    <h1>My User Profile</h1>
                </div>
            }
        </>
    )
}


export default UserProfile;