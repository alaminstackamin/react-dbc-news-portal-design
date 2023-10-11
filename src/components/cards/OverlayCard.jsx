import React from "react";
import "./OverlayCard.css";
import ClockIcon from "../content/ClockIcon";

function OverlayCard(props) {
  const img =
    "https://dbcnews.tv/_next/image?url=https%3A%2F%2Fapi.dbcnews.tv%2Fstorage%2F100893%2F5.webp&w=128&q=75";

  return (
    <div>
      <div class="card text-white">
        <img
          src="https://nationaltvbd.com/assets/images/news/2023/09/10/64fda36a5ef451694344042.jpeg"
          class="card-img"
          alt="ধর্ষণ মামলায় নারায়ণগঞ্জের আদালতে মামুনুল হক"
        />
        <a
          href="https://nationaltvbd.com/news/240/dhrshn-mamlaz-narazngnjer-adalte-mamunul-hk"
          class="card-img-overly"
        >
          <div class="d-flex align-items-center text-white mb-1">
            <ClockIcon />
            <span className="fs-6 fw-light">1 মাস আগে</span>
          </div>
          <h5 class="card-title fs-4 text-white mb-0">
            ধর্ষণ মামলায় নারায়ণগঞ্জের আদালতে মামুনুল হক
          </h5>
        </a>
      </div>
    </div>
  );
}

export default OverlayCard;
