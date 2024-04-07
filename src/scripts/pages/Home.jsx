import Layout from "@components/Layout";
import Hero from "@components/home/Hero";
import Experience from "@components/home/Experience";
import TechStack from "@components/home/TechStack";
import LatestWork from "@components/home/LatestWork";

const Home = () => {
  return (
    <Layout isHome={true}>
      <Hero />
      <Experience />
      <TechStack />
      <LatestWork/>
      </Layout>
  );
};

export default Home;
