import React from "react";

function ViewLine(props) {
    const title = props.title;
    const link = props.link;
  return (
    <div>
      <div className="position-relative mb-2 cursor-default group">
        <div
          className="position-absolute inset-0 d-flex align-items-center"
          aria-hidden="true"
        >
          <div className="w-100 border-t border-gray"></div>
        </div>

        <div className="position-relative d-flex justify-content-between align-items-center">
          <div className="px-2 fs-5 fw-bold text-danger bg-gray">{title}</div>
          <a
            href={link}
            className="px-2 fs-sm fw-bold text-danger  d-flex bg-gray "
          >
            <p className="order-1 inline-block mb-0">আরও দেখুন</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="order-2 inline-block w-5 h-5 text-danger"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ViewLine;
