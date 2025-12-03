import axios from "axios";

const {
    REACT_APP_PLANNER_API
} = process.env;


export const login = async (username, password) => {
    const queryUrl = REACT_APP_PLANNER_API + "/auth/login";
    const res = await axios.post(queryUrl, { username, password }, { withCredentials: true });
    return res.data;
};