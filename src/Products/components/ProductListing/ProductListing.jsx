import React, {Fragment, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.css"

const ProductListing = (props) => {
    console.log(props, "props prod listing")
    const [searchQuery, setSearchQuery] = useState("")

    const onSearchProductHandler = (event) => {
        let searchQuery = event.target.value
        setSearchQuery(searchQuery)
    }


    const renderRecipeData = () => {
        const data = props.recipeData.data.filter(item =>
            item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        )

        return data.map(data => {
            return (
                <div className="col-md-3 col-lg-3 col-sm-12">
                    <ProductCard
                        key={data.id}
                        data={data}
                    />
                </div>
            )
        })
    }


    if (!props.recipeData.data) {
        return <p>loading...</p>
    }
    return (
        <Fragment>
            <div className="row search-header-section">
                <div className="form-group input-group search">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1" style={{ border: "none", backgroundColor: "white" }}>
                            <i className=" fas fa-search"></i>
                        </span>
                    </div>

                    <input
                        type="text"
                        style={{ border: "none" }}
                        className={"form-control"}
                        placeholder={"Search your favourite recipes..."}
                        onChange={onSearchProductHandler}
                    />
                </div>
                <div className="cate-heading">
                    <h3 style={{
                        fontSize: "35px",
                        fontWeight: "800"
                    }}>Pizza & Noodles</h3>
                </div>
            </div>
            <div className={"row"}>
                {renderRecipeData()}
            </div>

        </Fragment>
    )
}

export default ProductListing