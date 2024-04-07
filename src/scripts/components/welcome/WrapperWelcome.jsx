import WelcomeText from "@components/welcome/WelcomeText";
import WelcomeLink from "@components/welcome/WelcomeLink";

const WrapperWelcome = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen bg-welcome-pattern w-5/6">
      <div className="text-center">
        <WelcomeText text="Roses are red, violets are blue, unexpected ';' on line 32." />
        <WelcomeLink linkText="Click Here" targetRoute="/home" />
      </div>
    </div>
  );
};

export default WrapperWelcome;
