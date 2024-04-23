import axios from "axios";

const base_url = "http://localhost:5000";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const Loginuser = (userdetail) => async (dispatch) => {
    try {
        const response = await axios.post(base_url + "/login", userdetail, {
            withCredentials: true,
        });
        console.log(response);
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: { user: response.data?.admin, message: response.data?.message },
        });
    } catch (error) {
        dispatch({
            type: LOGIN_USER_FAILURE,
            payload: { message: error.response?.data.message || "Login failed" },
        });
    }
};

export const Registeruser = (userdetail) => async (dispatch) => {
    try {
        const response = await axios.post(base_url + '/register', userdetail);
        console.log(response);
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: { user: response?.data.admin, message: response.data.message },
        });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAILURE,
            payload: { message: error.response?.data.message || "Registration failed" },
        });
    }
};

export const Logout = () => (dispatch) => {
    try {
        // You might include additional logic here for server-side logout
        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        console.log(error.message);
    }
};
