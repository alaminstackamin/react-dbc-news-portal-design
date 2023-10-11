import React from "react";

function LatestTitle(props) {
  return (
    <div>
      <div className="d-flex align-items-center border-b px-3 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="inline-block w-6 h-6 me-2 text-gray"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          ></path>
        </svg>
        <span className="fs-5 fw-semibold text-gray">দিনের সর্বশেষ</span>
      </div>
    </div>
  );
}

export default LatestTitle;
