const alertReducer = (state, { type, payload }) => {
    console.log("state", state);
    switch(type){
        case "SHOW_ALERT":
            return payload
        
        case "REMOVE_ALERT":
            return null

        default:
            return state
    }
}

export default alertReducer;