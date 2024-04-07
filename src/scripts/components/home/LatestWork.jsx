import { latestWorkData } from "@data/latestWorkData";
import WorkCard from "@components/home/WorkCard";

const LatestWork = () => {
  return (
    <section className="bg-white py-16 px-10 lg:px-8 lg:w-4/5 mx-auto">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Latest Work</h2>
        <p className="text-lg text-gray-700 mb-12">
          This showcase represents my ongoing efforts to enhance my skills and
          showcase my work.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestWorkData.map((work) => (
            <WorkCard key={work.id} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
