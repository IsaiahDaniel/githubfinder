const githubReducer = (state, { type, payload }) => {
    switch(type){
        case "GET_USERS":
            return {
                ...state,
                users: payload,
                isLoading: false
            }

        case "GET_USER":
            return {
                ...state,
                user: payload,
                isLoading: false
            }

        case "GET_REPOS":
            return {
                ...state,
                repos: payload,
                isLoading: false
            }
            
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }


        default:
            return state;
    }
}

export default githubReducer;