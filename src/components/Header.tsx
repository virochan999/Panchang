import logo from "../assets/logo.svg";
import data from "../assets/data.json";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex items-center flex-col md:flex-row justify-between p-4">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="logo"
          className="h-[92px] w-[92px] "
        />
        <h1 className="text-[50px] font-bold">{data.heading}</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
