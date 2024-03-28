import Links from "@/components/Links";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import backgroundImage from "../assets/background.svg";
import Table from "@/components/Table";

const Home = () => {
  return (
    <div>
      <Header />
      <Links />
      <div
        className="flex mt-4 bg-cover flex-col"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="md:w-[1400px] ml-[66px] flex justify-end p-4 rounded-sm bg-[linear-gradient(90.7deg,_#A77149_4.1%,_#DD9F70_47.36%,_#A77149_96.39%)]">
          <Button
            className="font-bold text-[30px]"
            variant="secondary"
          >
            Book now!
          </Button>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Home;
