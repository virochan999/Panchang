import { Button } from "@/components/ui/button";
import WebsiteLogo from "../assets/websiteLogo.svg";
const Login = () => {
  return (
    <div className="bg-white flex flex-col md:block pt-4">
      <img
        src={WebsiteLogo}
        alt="logo"
      />
      <div className="md:my-[71px] flex flex-col-reverse md:flex-row md:gap-[193px] py-[30px]">
        <div className="flex flex-col w-full items-center rounded-lg gap-8 px-[50px] md:px-[128px] py-[119px] bg-[linear-gradient(93.01deg,_#672CD5_2.23%,_#E21185_97.5%)]">
          <h2 className="text-[32px] font-black mb-[40px]">
            Academic Pathway Planning
          </h2>
          <p className="text-justify">
            Parachute Design is a top web design agency hand-crafting beautiful
            website design and branding since 2003. ParacParachute Design is a
            top web design agency hand-crafting beautiful website design and
            branding since 2003.hute Design is a top web design agency
            hand-crafting beautiful website design and branding since
            2003.Parachute Design is a top web design agency hand-crafting
            beautiful website design and branding since 2003.Parachute Design is
            a top web design agency hand-crafting beautiful website design and
            branding since 2003.Parachute Design is a top web design agency
            hand-crafting beautiful website design and branding since
            2003.Parachute Design is a top web design agency hand-crafting
            beautiful website design and branding since 2003.
          </p>
          <p className="text-justify">
            Parachute Design is a top web design agency hand-crafting beautiful
            website design and branding since 2003. ParacParachute Design is a
            top web design agency hand-crafting beautiful website design and
            branding since 2003.hute Design is a top web design agency
            hand-crafting beautiful website design and branding since
            2003.Parachute Design is a top web design agency hand-crafting
            beautiful website design and branding since 2003.Parachute Design is
            a top web design agency hand-crafting beautiful website design and
            branding since 2003.Parachute Design is a top web design agency
            hand-crafting beautiful website design and branding since
            2003.Parachute Design is a top web design agency hand-crafting
            beautiful website design and branding since 2003.
          </p>
          <Button variant="outline">Know More</Button>
        </div>
        <div className="flex flex-col items-center p-[36px] [box-shadow:rgba(100,_100,_111,_0.2)_0px_7px_29px_0px] md:mr-10">
          <h2 className="bg-[linear-gradient(93.01deg,_#672CD5_2.23%,_#E21185_97.5%)] w-fit font-semibold text-transparent bg-clip-text">
            Welcome to login page
          </h2>
          <form className="flex flex-col gap-4 mt-8 p-8 [box-shadow:rgba(100,_100,_111,_0.2)_0px_7px_29px_0px]">
            <input
              type="email"
              placeholder="Email"
              className="h-[48px] md:w-[505px] shadow-md px-4 border text-[#666666] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="h-[48px] md:w-[505px] shadow-md px-4 border text-[#666666] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <p className="text-[#1E1E1E] text-[14px] cursor-pointer flex justify-end">
              Forgot Password?
            </p>
            <select
              name="Select"
              id="select"
              className="h-[48px] md:w-[505px] px-4 shadow-md text-[#666666] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="">Select</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <Button className="mx-auto bg-gradient-to-r mt-12 from-[#672CD5] to-[#E21185] text-white font-semibold rounded p-1">
              <span className="flex w-[100px] justify-center bg-white text-[#672CD5] rounded p-2">
                Login
              </span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
