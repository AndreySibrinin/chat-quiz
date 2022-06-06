import {logoutAction} from "../store/userReducer";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const Main = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>{dispatch(logoutAction(navigate))}}> Logout </button>
        </div>
    );
};

export default Main;