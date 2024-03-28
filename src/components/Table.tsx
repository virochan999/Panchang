import Sunrise from "../assets/sunrise.svg";
import Sunset from "../assets/sunset.svg";
import Moonrise from "../assets/moonrise.svg";
import Moonset from "../assets/moonset.svg";
import { Button } from "./ui/button";
import RightArrow from "../assets/rightArrow.svg";

const Moondata = [
  {
    id: 1,
    name: "Sunrise",
    icon: Sunrise,
    time: "6:15:26",
  },
  {
    id: 2,
    name: "Sunset",
    icon: Sunset,
    time: "6:15:26",
  },
  {
    id: 3,
    name: "Moonrise",
    icon: Moonrise,
    time: "6:15:26",
  },
  {
    id: 4,
    name: "Moonset",
    icon: Moonset,
    time: "6:15:26",
  },
];

const Table = () => {
  return (
    <div className="md:ml-[66px] mt-[100px] w-fit border border-[#D6996C] rounded-sm">
      <header className="border border-[#D6996C] p-[13px]">
        <h3 className="text-[30px]">Today's Panchang</h3>
      </header>
      <div className="flex text-[#F9B27D] justify-around md:justify-between border border-[#D6996C]">
        <div className="py-[25px] flex flex-col justify-center border-r border-[#D6996C]">
          <p className="text-[22px] font-medium">MON, 14 AUG, 2023</p>
          <p className="text-[18px] font-normal">Mumbai, IN</p>
        </div>
        <div className="md:flex">
          {Moondata.map((item) => (
            <div
              key={item.id}
              className="p-[10px] flex flex-col justify-between"
            >
              <img
                src={item.icon}
                alt={item.name}
              />
              <p className="text-[15px]">{item.time}</p>
              <p className="text-[12px]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex">
        <div className="p-[13px] border-r border-[#D6996C]">
          <h3 className="text-[15px]">Month</h3>
          <p className="text-[12px] flex gap-4">
            Amantha <span className="text-[#F9B27D]">Shravan</span>
          </p>
          <p className="text-[12px] flex gap-4">
            Purnimantha <span className="text-[#F9B27D]"> Shravan</span>
          </p>
        </div>
        <div className="p-[13px] border-r border-[#D6996C]">
          <h3 className="text-[15px]">Month</h3>
          <p className="text-[12px] flex gap-4">
            Amantha <span className="text-[#F9B27D]">Shravan</span>
          </p>
          <p className="text-[12px] flex gap-4">
            Purnimantha <span className="text-[#F9B27D]"> Shravan</span>
          </p>
        </div>
        <div className="p-[13px] border-r border-[#D6996C]">
          <h3 className="text-[15px]">Yog</h3>
          <p className="text-[#F9B27D] text-[12px]">Siddhi till 11:23:45</p>
        </div>
        <div className="p-[13px] border-r border-[#D6996C]">
          <h3 className="text-[15px]">Karan</h3>
          <p className="text-[#F9B27D] text-[12px]">Vanija till 11:23:45</p>
        </div>
      </div>
      <div className="flex items-center justify-between border border-[#D6996C]">
        <div className="p-[13px] border-r border-[#D6996C]">
          <h3 className="text-[15px]">Tithi</h3>
          <p className="text-[#F9B27D] text-[12px]">Vanija till 11:23:45</p>
        </div>
        <div className="p-[13px] border-r border-[#D6996C]">
          <h3 className="text-[15px]">Nakshatra</h3>
          <p className="text-[#F9B27D] text-[12px]">Vanija till 11:23:45</p>
        </div>
        <div className="p-[13px]">
          <Button
            variant="default"
            className="text-black font-bold flex gap-2 items-start"
          >
            <span className="text-[22px]">Detailed Panchang </span>
            <img
              src={RightArrow}
              alt="arrow"
            />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Table;
