import React, {Fragment, useState, useEffect} from "react";
import {connect} from "react-redux"
import "./ProductDetail.css"

const ProductDetail = (props) => {
    console.log(props.match.params.id, "detail page")
    const [newComment, setNewComment] = useState("")
    const [comment, setComment] = useState(JSON.parse(localStorage.getItem("comments")))

    useEffect(() => {
        const comments = [
            {
                desc: "nice product"
            }
        ]

        localStorage.setItem("comments", JSON.stringify(comments))
    }, [])


    const addCommentHandler = () => {
        const stateComment = comment
        stateComment.push({
            desc: newComment
        })
        setComment(stateComment)
        setNewComment("")
    }

    const renderProductDetail = () => {
        let id = parseInt(props.match.params.id.substring(1))
        let filteredRecipeData = props.recipeData && props.recipeData.data.filter(item => item.id === id)
        if (!filteredRecipeData) {
            return (
                <Fragment>
                    <span>No data Available</span>
                    <button onClick={() => props.history.push("/")}>Go To Home Page</button>
                </Fragment>
            )
        } else {
            console.log(filteredRecipeData, "filteredRecipeData")

            return (
                <>
                    <div className="back-btn" style={{cursor: "pointer"}} onClick={() => props.history.push("/")}>
                        <span>
                            <i className="fas fa-arrow-left"></i>
                        </span>
                        <p className={"go-back-txt"}>Go back</p>
                    </div>
                    <div className={"row"} style={{alignItems: "center"}}>

                        <div className="col-md-6">
                            <div className="play-icon">
                                <img src={require("../../../assets/Icons/Icon ionic-ios-play-circle.png")}
                                     alt="play-circle"/>
                            </div>
                            <img src={filteredRecipeData[0].image} alt="prod-img" className={"img-fluid card-img-top"}
                                 style={{height: "300px", borderRadius: "10px"}}/>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 prod-title">
                                    <h4 className={"float-right"}>{filteredRecipeData[0].name}</h4>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-7"/>
                                        <div className="col-md-1">
                                            <span className="rating">4/5</span>
                                        </div>
                                        <div className="col-md-1">
                                            <img src={require("../../../assets/Icons/Icon awesome-star.png")} alt=""/>
                                        </div>
                                        <div className="col-md-1">
                                            <img src={require("../../../assets/Icons/Icon awesome-star.png")} alt=""/>
                                        </div>
                                        <div className="col-md-1">
                                            <img src={require("../../../assets/Icons/Icon awesome-star.png")} alt=""/>
                                        </div>
                                        <div className="col-md-1">
                                            <img src={require("../../../assets/Icons/Icon awesome-star.png")} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h4 className={"float-right"}>$-{filteredRecipeData[0].price}</h4>
                                </div>

                                <div className="col-md-12 desc-sec">
                                    <span className="desc-txt">Description</span>
                                    <p className="float-right desc">{filteredRecipeData[0].description}</p>
                                </div>
                            </div>

                        </div>
                        {/*<div className="col-md-2"/>*/}

                    </div>
                    <div className="row">
                        {/*<div className="col-md-2"/>*/}

                        <div className="col-md-6 ingredient-section">
                            <h5 className="ingredient-title">Ingredients :</h5>
                            <p className="ingredient-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Debitis deserunt distinctio, earum inventore minima nam, neque nihil nobis placeat quae
                                quisquam quod quos reiciendis saepe suscipit tempora tempore tenetur ullam voluptas
                                voluptatum. Esse et iusto sed voluptatibus? Aliquam excepturi explicabo illum maxime nam
                                quaerat reiciendis, vitae voluptatibus. Aliquam ea, praesentium.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6"/>
                                <div className="col-md-2">
                                    <div className="number">
                                        <span>8</span>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="number">
                                        <span>220</span>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="number">
                                        <span>25</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6"/>
                                <div className="fav col-md-6" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <h4 style={{ fontSize: "20px", fontWeight: "400" }}>Favourite this recipe</h4>
                                    <span>
                        <img src={require("../../../assets/Icons/Icon feather-heart-color.png")} alt=""
                             style={{width: "20px"}}/>
                    </span>

                                </div>
                            </div>
                        </div>
                        {/*<div className="col-md-2"/>*/}
                    </div>

                    <div className="row">
                        {/*<div className="col-md-2"/>*/}

                        <div className="col-md-6 prepare-section">
                            <h5 className="prepare-title">How to prepare:</h5>
                            <p className="prepare-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                                quidem, tempora. Aliquid animi autem blanditiis commodi cumque cupiditate dolore,
                                dolorum facilis maiores, modi nobis nostrum odio perferendis possimus quod sed suscipit.
                                At atque eveniet inventore libero maxime modi molestias odit omnis rem voluptatum.
                                Consequatur cumque dolore enim, facere perferendis veritatis.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">

                                <div className="col-md-4"/>
                                <div className="col-md-8" style={{}}>
                                    <h6 className="float-left">Add Comments</h6>
                                    <div className="form-group">
                                        <textarea placeholder="add comment" className="form-control" cols="3" rows="3"
                                                  onChange={(e) => setNewComment(e.target.value)}></textarea>
                                    </div>
                                    <button className="btn btn-dark btn-lg btn-block"
                                            onClick={(e) => addCommentHandler()}>Add Comment
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-md-2"/>*/}
                    </div>
                </>
            )
        }
    }


    return (
        <Fragment>
            <div className={"container"}>
                {renderProductDetail()}

                <div className="comment-section">
                    {/*<ul>*/}
                    <h4 style={{fontWeight: "800", textAlign: "left", padding: "10px", fontSize: "18px"}}>Comments
                        :</h4>

                    {comment && comment.map(com => {
                        return (
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card">
                                        <h5 className="card-header float-left" style={{textAlign: "left"}}>Featured</h5>
                                        <div className="card-body">
                                            <p className="card-text float-left">{com.desc}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4"/>

                            </div>

                        )
                    })}
                    {/*</ul>*/}
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({productReducer}) => {
    console.log(productReducer, "productReducer details")
    return {
        recipeData: productReducer.recipeData
    }
}
export default connect(mapStateToProps)(ProductDetail)