import {userTypes} from "./actionTypes";

// User
export const setUser = (user) => ({
    type: userTypes.SET_USER,
    user
})

export const removeUser = () => ({
    type: userTypes.REMOVE_USER,
})
