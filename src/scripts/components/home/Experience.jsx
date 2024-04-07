import { experienceData } from "@data/experienceData";

const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();

  let duration = "";
  if (yearDiff > 0) {
    duration += `${yearDiff} ${yearDiff > 1 ? "years" : "year"}`;
    if (monthDiff > 0) {
      duration += ` ${monthDiff} ${monthDiff > 1 ? "months" : "month"}`;
    }
  } else {
    if (monthDiff > 0) {
      duration += `${monthDiff} ${monthDiff > 1 ? "months" : "month"}`;
    }
  }

  return duration;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  return `${year} ${month}`;
};

const Experience = () => {
  return (
    <div className="bg-white py-10 px-6 lg:px-8 lg:w-4/5 mx-auto">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Experience
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Embark on a journey through my ongoing efforts to hone my skills and
          showcase my work.
        </p>
        <ul>
          {experienceData.map((experience) => (
            <li key={experience.id} className="mb-8">
              <div className="border-b-2 border-gray-300 pb-4 font-poppins">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <span className="text-gray-800">{experience.jobTitle}</span>{" "}
                  <span className="text-gray-600">({experience.jobType})</span>
                </h3>
                <p className="text-lg text-gray-700 mb-2">
                  <a
                    href={experience.websiteURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.company}
                  </a>
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  {formatDate(experience.startDate)} -{" "}
                  {experience.endDate
                    ? formatDate(experience.endDate)
                    : "Present"}{" "}
                  &bull;{" "}
                  {calculateDuration(experience.startDate, experience.endDate)}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  {experience.location}
                </p>
                <p className="text-gray-700 mb-4">{experience.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
