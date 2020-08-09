import React, {Fragment, useState} from "react";
import "./ProductCard.css"
import {withRouter} from "react-router-dom"

const ProductCard = (props) => {
    return (
        <Fragment>
            <div className="card card-section">
                <div className={"badge-section"}>
                    <span className="badge badge-dark badge-text">{props.data.label}</span>
                </div>

                <div className="card-img-top">
                    <img src={props.data.image} alt="prod-img" className={"img-fluid"}
                         style={{height: "250px"}}/>
                </div>

                <div className="card-body card-item">
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <h5 className="card-title text-left"
                            style={{ cursor: "pointer", fontSize: "25px", fontWeight: "900" }}
                            onClick={() => props.history.push(`${props.match.url}:${props.data.id}`)}>{props.data.name}</h5>
                        {
                            props.data.id % 2 === 0 ? (
                                <span>
                        <img src={require("../../../assets/Icons/Icon feather-heart.png")} alt="" style={{ width: "20px" }}/>
                    </span>
                            ) : (
                                <span>
                        <img src={require("../../../assets/Icons/Icon feather-heart-color.png")} alt="" style={{ width: "20px" }}/>
                    </span>
                            )
                        }
                    </div>

                    <p className={"card-text text-left"}>{props.data.description}</p>
                </div>
            </div>
        </Fragment>

    )
}

export default withRouter(ProductCard)