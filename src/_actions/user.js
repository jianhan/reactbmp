import * as ats from "./actionTypes";

// User
export const setUser = (user) => ({
    type: ats.userTypes.SET_USER,
    user
})

export const removeUser = () => ({
    type: ats.userTypes.REMOVE_USER,
})
