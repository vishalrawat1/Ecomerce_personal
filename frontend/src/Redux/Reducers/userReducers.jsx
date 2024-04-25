import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS, LOGOUT_SUCCESS } from "../Action/actionTypes";
import { toast } from "sonner";

// Get user data from local storage
const userFromLocalStorage = localStorage.getItem("user");
let parsedUser = JSON.parse(userFromLocalStorage) || {};

const initialState = {
    user: parsedUser || {}, 
    session: !!parsedUser, 
};

// Define the reducer function
export const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            // console.log(action.payload.user);
            
            alert("Login successful");
            toast.success("Login Successful");
            return { ...state, user: action.payload.user, session: true };
        
        case LOGIN_USER_FAILURE:
            alert("Try Again Later");
            toast.error("try again later")
            toast.error(action.payload.message);
            return state;
        
        case REGISTER_USER_SUCCESS:
            toast.success("Registration Successful");
            return state;

        case REGISTER_USER_FAILURE:
            toast.error(action.payload.message);
            return state;
            
        case LOGOUT_SUCCESS:
            localStorage.clear();
            return { user: {}, session: false }; 
        
        default:
            return state;
    }
};
