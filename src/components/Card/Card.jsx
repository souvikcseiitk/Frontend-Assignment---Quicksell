import React from "react";
import "./Card.css";
import { FaRegCircle } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BiAdjust, BiLoader } from "react-icons/bi";
import { BsCheckCircleFill, BsFillExclamationSquareFill } from "react-icons/bs";

const Card = ({ id, title, tag, status, priority }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const statusOrder = ['Backlog', 'Todo', 'In progress', 'Done'];
  const getStatusIndex = (status) => {
    return statusOrder.indexOf(status);
  };

  // Mapping IDs to image URLs
  const imageMapping = {
    "CAM-1": "https://cdn-icons-png.freepik.com/512/4140/4140048.png",
    "CAM-2": "https://cdn-icons-png.freepik.com/512/4140/4140049.png",
    "CAM-3": "https://cdn-icons-png.freepik.com/512/4140/4140050.png",
    "CAM-4": "https://cdn-icons-png.freepik.com/512/4140/4140051.png",
    "CAM-5": "https://cdn-icons-png.freepik.com/512/4140/4140052.png",
    "CAM-6": "https://cdn-icons-png.freepik.com/512/4140/4140053.png",
    "CAM-7": "https://cdn-icons-png.freepik.com/512/4140/4140054.png",
    "CAM-8": "https://cdn-icons-png.freepik.com/512/4140/4140055.png",
    "CAM-9": "https://cdn-icons-png.freepik.com/512/4140/4140056.png",
    "CAM-10": "https://cdn-icons-png.freepik.com/512/4140/4140057.png",
  };

  const getImageUrl = (id) => imageMapping[id] || "https://cdn-icons-png.freepik.com/512/4140/4140073.png";

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <img
            style={{ width: "95%", height: "95%", borderRadius: "50%" }}
            src={getImageUrl(id)}
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        {!isStatus &&
          (
            status === "Backlog" ? (
              <BiLoader style={{ fontSize: "14px" }} />
            )
              : status === "Todo" ? (
                <FaRegCircle style={{ fontSize: "13px", color: "#ddeded" }} />
              ) : status === "In progress" ? (
                <BiAdjust style={{ fontSize: "14px", color: "#f2d750" }} />
              ) : status === "Done" ? (
                <BsCheckCircleFill />
              )
                : (
                  <IoMdCloseCircleOutline />
                ))}
        <span style={{ margin: "0.2px" }}>{title}</span>
      </div>
      <div className="cardTags">
        {!isPriority ? (
          <div className="tags color-grey">
            {priority === 1 || priority === 2 || priority === 3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-signal"
                viewBox="0 0 16 16"
              >
                <rect x="1" y="10" width="3" height="2" />
                <rect
                  x="5"
                  y="7"
                  width="3"
                  height="5"
                  opacity={priority === 2 || priority === 3 ? 1 : 0.25}
                />
                <rect
                  x="9"
                  y="4"
                  width="3"
                  height="8"
                  opacity={priority === 3 ? 1 : 0.25}
                />
              </svg>
            ) : priority === 4 ? (
              <BsFillExclamationSquareFill />
            ) : (
              <p>...</p>
            )}
          </div>
        ) : null}
        {tag?.map((element, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              <span>•</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
