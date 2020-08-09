const defaultState = {
    recipeData: [],
    spinner: false
}
export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "FETCHING_DATA":
            return {
                ...state,
                spinner: true
            }
        case "SUCCESS_DATA":
            return {
                ...state,
                recipeData: action.payload,
                spinner: false
            }
        default:
            return state

    }

}