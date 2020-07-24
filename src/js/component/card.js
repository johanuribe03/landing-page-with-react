import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Card(props) {
    const {title, body, buttonText, url, image} = props;
	return (
        <div className="card">
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <a href={url} className="btn btn-primary">{buttonText}</a>
            </div>
            </div>
	);
}

Card.propTypes = {
    tittle: PropTypes.string,
    body: PropTypes.string,
    buttonText: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string
}