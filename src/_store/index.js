import {applyMiddleware, createStore} from "redux"
import {createLogger} from "redux-logger"
import rootReducer from "../_reducers"
import thunkMiddleware from "redux-thunk"

const loggerMiddleware = createLogger()
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
)


export default store
