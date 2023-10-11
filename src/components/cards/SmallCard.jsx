import React from "react";
import Title from "../content/Title";
import Time from "../content/Time";

function SmallCard(props) {
  const img =
    "https://dbcnews.tv/_next/image?url=https%3A%2F%2Fapi.dbcnews.tv%2Fstorage%2F100816%2F12.webp&w=128&q=75";
  return (
    <div>
      <a href="#" className="w-100 bg-white d-block px-3 py-2 border-b">
        <div className="row g-2">
          <div className="col-8">
            <Title />
            <div className="mt-2">
              <Time />
            </div>
          </div>
          <div className="col-4">
            <div className="">
              <img src={img} className="card-img rounded-2" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default SmallCard;
