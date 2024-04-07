import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const WelcomeLink = ({ linkText, targetRoute }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(targetRoute);
  };

  return (
    <p className="text-lg mb-8">
      <span
        className="text-blue-500 cursor-pointer hover:text-blue-700 transition-colors"
        onClick={handleClick}
      >
        {linkText}
      </span>
    </p>
  );
};

WelcomeLink.propTypes = {
  linkText: PropTypes.string.isRequired,
  targetRoute: PropTypes.string.isRequired,
};

export default WelcomeLink;
