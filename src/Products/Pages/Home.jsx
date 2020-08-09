import React, { Fragment, useEffect, useState } from "react";
import {connect} from "react-redux"
import * as actions from "../actions";
import axios from "axios"
import ProductListing from "../components/ProductListing/ProductListing";
import {Route, Switch} from "react-router-dom";
import ProductDetail from "./ProductDetails/ProductDetail";

const Home = (props) => {

    useEffect( () => {
        props.getRecipeData()

        // async function getRecipeData() {
        //     let response = await axios.get("http://starlord.hackerearth.com/recipe")
        //     console.log(response, "response")
        //     setRecipeData(response)
        // }
        // getRecipeData()
    }, [])


    return (
        <Fragment>
            <div className={"container"}>
                <div className="row">
                    <div className="col">
                        <ProductListing
                            recipeData={props.recipeData}
                        />
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

const mapStateToProps = ({ productReducer }) => {
    return {
        recipeData: productReducer.recipeData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRecipeData: actions.getRecipeData(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);