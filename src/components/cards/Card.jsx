import React from "react";
import Title from "../content/Title";
import Time from "./../content/Time";
import Tags from "../content/Tags";

function Card(props) {
  const img =
    "https://dbcnews.tv/_next/image?url=https%3A%2F%2Fapi.dbcnews.tv%2Fstorage%2F100888%2F1696957127.webp&w=128&q=75";
  return (
    <div>
      <a href="#" className="w-100 rounded-2 bg-white d-block p-3 mb-2">
        <div className="row g-2">
          <div className="col-8">
            <div className="mb-1">
              <Tags />
            </div>

            <Title />
          </div>
          <div className="col-4">
            <div className="mb-2">
              <img src={img} className="card-img rounded-2" />
            </div>

            <Time />
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
