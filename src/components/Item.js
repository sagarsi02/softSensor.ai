import React from "react";
import "./item.css";
import {Link} from 'react-router-dom';

export default function Item(props) {
  const { data } = props;
  return (
    <>
      <div className="boxes">
        <div className="box">
          <div className="imageSec">
            <p className="category">
              <span className="bold">Category: </span>
              {data.category}
            </p>
            <img src={data.image} alt="" id="prod-img" />
          </div>
          <div className="prod-details">
            <div className="details">
              <h3 className="title">{data.title.slice(0, 20)}...</h3>
              <p className="prod-desc">{data.description.slice(0, 55)}...</p>
              <p className="cost">Cost: {data.price}</p>
              <button type="button" id="addCart">
              <Link to='/cart'> Add To Cart</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
