import React from "react";
import PropTypes from "prop-types";

const Card = ({ imageUrl, title, description, buttonLabel, buttonUrl }) => {
  return (
    <div className="card h-100">
      <img className="card-img-top" src={imageUrl} alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a href={buttonUrl} className="btn btn-primary mt-auto">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired
};

export default Card;
