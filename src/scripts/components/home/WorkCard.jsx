import { useState } from "react";
import PropTypes from "prop-types";
import CardFlip from "react-card-flip";

const WorkCard = ({ title, description, imageURL, websiteURL }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleVisitClick = () => {
    window.open(websiteURL, "_blank");
  };

  return (
    <div className="bg-white shadow-2xl rounded-lg cursor-pointer text-center box-border border-4">
      <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          onClick={handleClick}
          className="card-side front-side w-full h-56 relative"
        >
          <img
            src={imageURL}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
  </div>
        </div>
        <div
          onClick={handleClick}
          className="card-side back-side w-full h-56 p-4 bg-gray-300 relative"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2 cursor-pointer ">
            {title}
          </h3>
          <p className="text-gray-700 ">{description}</p>
          <button
            onClick={handleVisitClick}
            className="absolute bottom-0 left-0 right-0 py-2 text-blue-600 hover:text-blue-800 focus:outline-none"
          >
            Click Here
          </button>
        </div>
      </CardFlip>
    </div>
  );
};

WorkCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  websiteURL: PropTypes.string.isRequired,
};

export default WorkCard;
