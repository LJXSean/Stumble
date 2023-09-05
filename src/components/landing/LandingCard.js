import React from "react";
import PropTypes from "prop-types";
import icon from "../../img/icon.png";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";

const LandingCard = ({
  posts: { avatar, name, title, date, comments, _id },
  i,
}) => {
  return (
    <div className="card">
      <h1 className="cardIndex">0{i + 1}</h1>
      <div className="cardItem">
        <div className="cardHeader">
          {" "}
          <img
            className="header-img"
            src={avatar}
            alt="icon"
            style={{ color: "#e31616", height: "38px", objectFit: "contain" }}
          />
          <Link to="/profiles" className="link">
            {name}
          </Link>
        </div>

        <h4>
          <Link to={`/posts/${_id}`} className="link">
            {title}
          </Link>
        </h4>
        <span className="date">{formatDate(date)}</span>
        <span className="date">|| {comments.length} Comments</span>
      </div>
    </div>
  );
};

LandingCard.propTypes = {};

export default LandingCard;
