import React from "react";
import "./OverlayCard.css";
import ClockIcon from "../content/ClockIcon";

function OverlayCard(props) {
  const img =
    "https://dbcnews.tv/_next/image?url=https%3A%2F%2Fapi.dbcnews.tv%2Fstorage%2F100896%2F8.webp&w=640&q=75";

  const title = "মাহমুদউল্লাহকে বাদ দেওয়ার সিদ্ধান্তে অবাক হয়েছি";

  return (
    <div>
      <div className="card text-white">
        <img
          src={img}
          className="card-img"
          alt={title}
        />
        <a
          href="https://nationaltvbd.com/news/240/dhrshn-mamlaz-narazngnjer-adalte-mamunul-hk"
          className="card-img-overly"
        >
          <div className="d-flex align-items-center text-white mb-1">
            <ClockIcon />
            <span className="fs-6 fw-light">1 মাস আগে</span>
          </div>
          <h5 className="card-title fs-4 text-white mb-0">
            {title}
          </h5>
        </a>
      </div>
    </div>
  );
}

export default OverlayCard;
