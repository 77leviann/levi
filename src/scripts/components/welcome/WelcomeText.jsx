import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";

const WelcomeText = ({ text }) => {
  return (
    <h1 className="text-4xl font-bold mb-2">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(text).start();
        }}
      />
    </h1>
  );
};

WelcomeText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WelcomeText;
