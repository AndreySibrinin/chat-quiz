import {loginAction, logoutAction} from "../store/userReducer";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    return (
        <div>
          <button onClick={()=>{dispatch(loginAction(navigate))}}> Login </button>
        </div>
    );
};

export default Login;