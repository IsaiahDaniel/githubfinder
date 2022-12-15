import { createContext, useReducer } from "react";
import alertReducer from "./alertReducer";

export const AlertContext = createContext();

const AlertProvider = ({ children }) => {

    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const showAlert = (msg, type) => {

        dispatch({
            type: "SHOW_ALERT",
            payload: { msg, type }
        })

        setTimeout(() => {
            dispatch({ type: "REMOVE_ALERT" })
        }, 2000)

    }

    return (
        <AlertContext.Provider value={{ showAlert, alert: state }}>
            { children }
        </AlertContext.Provider>
    )
}

export default AlertProvider;