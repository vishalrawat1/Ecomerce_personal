import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS, LOGOUT_SUCCESS } from "../Action/actionTypes";
import { toast } from "sonner";

// Get user data from local storage
const userFromLocalStorage = localStorage.getItem('user');
let parsedUser = null;

// Parse user data if it exists
try {    
    parsedUser = JSON.parse(userFromLocalStorage);
} catch (error) {
    console.error('Error parsing user data from local storage:', error);
}

// Define the initial state
const initialState = {
    user: parsedUser || {}, // Use parsed user data or an empty object
    session: !!parsedUser, // Set session to true if user data exists, false otherwise
};

// Define the reducer function
export const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            toast.success("Login Successful");
            return { ...state, user: action.payload.user, session: true };
        
        case LOGIN_USER_FAILURE:
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
            return { user: {}, session: false }; // Reset user and session on logout
        
        default:
            return state;
    }
};
