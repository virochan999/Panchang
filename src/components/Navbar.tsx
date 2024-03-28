import { NavLink } from "react-router-dom";
import { colors } from "../styles/variables";

const Navbar = () => {
  return (
    <div className="flex justify-between md:w-[720px] items-center border-2 p-2 rounded-[100px] pl-8 border-[#DA9C6E]">
      <NavLink
        to="/"
        className={`${colors.primary}`}
      >
        Home
      </NavLink>
      <div className="flex gap-12 items-center">
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/astro">Astro Guides</NavLink>
        <NavLink
          to="/login"
          className="h-10 px-4 py-2 font-semibold text-black bg-[linear-gradient(90.7deg,_#A77149_4.1%,_#DD9F70_47.36%,_#A77149_96.39%)] rounded-[50px]"
        >
          Sign Up/Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
