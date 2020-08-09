import axios from "axios";

export const getRecipeData = (dispatch) => async () => {
    dispatch(fetchingData())
    try {
        let response = await axios.get("http://starlord.hackerearth.com/recipe")
        console.log(response, "response")
        dispatch(RecipeData(response))
    } catch (err) {
        console.log(err, "err")
    }

}

export const fetchingData = () => {
    return {
        type: "FETCHING_DATA"
    }
}

export const RecipeData = (responseData) => {
    return {
        type: "SUCCESS_DATA",
        payload: responseData
    }
}