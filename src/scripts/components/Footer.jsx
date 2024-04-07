import { FiMail } from "react-icons/fi";

const Footer = () => {
  const emailAddress = "77leviann@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6 lg:px-8 w-5/6">
        <div
          className="flex items-center mb-4 lg:mb-0 cursor-pointer"
          onClick={handleEmailClick}
        >
          <FiMail className="text-xl" />
          <span id="email" className="email ml-2">
            {emailAddress}
          </span>
        </div>
        <hr className="w-full lg:hidden border-gray-600 my-4" />
        <div className="text-sm lg:border-l lg:border-gray-600 lg:pl-4 lg:ml-4 lg:mt-0 mt-4">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
