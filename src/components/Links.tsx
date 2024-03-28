import Kundali from "../assets/kundli.svg";
import Panchang from "../assets/panchang.svg";
import Matchmaking from "../assets/matchmaking.svg";
import Varshapal from "../assets/varshapal.svg";
import Biorythm from "../assets/biorythm.svg";
import Chakras from "../assets/chakras.svg";
import Elements from "../assets/elements.svg";
import Constitution from "../assets/constitution.svg";
import Nakshtras from "../assets/nakshtras.svg";
import Mantras from "../assets/mantras.svg";
import Lagna from "../assets/lagna.svg";
import Lifestone from "../assets/lifestone.svg";

const LinksData = [
  {
    id: 1,
    icon: Kundali,
    name: "Kundali",
  },
  {
    id: 2,
    icon: Panchang,
    name: "Panchang",
  },
  {
    id: 3,
    icon: Matchmaking,
    name: "Matchmaking",
  },
  {
    id: 4,
    icon: Varshapal,
    name: "Varshapal",
  },
  {
    id: 5,
    icon: Biorythm,
    name: "Biorythm",
  },
  {
    id: 6,
    icon: Chakras,
    name: "Chakras",
  },
  {
    id: 7,
    icon: Elements,
    name: "Elements",
  },
  {
    id: 8,
    icon: Constitution,
    name: "Constitution",
  },
  {
    id: 9,
    icon: Nakshtras,
    name: "Nakshtras",
  },
  {
    id: 10,
    icon: Mantras,
    name: "Mantras",
  },
  {
    id: 11,
    icon: Lagna,
    name: "Lagna",
  },
  {
    id: 12,
    icon: Lifestone,
    name: "Lifestone",
  },
];
const Links = () => {
  return (
    <div className="grid grid-cols-4 md:flex md:justify-between px-8 py-4 border-y-2 border-[#DA9C6E]  bg-[linear-gradient(180deg,_#1F1F1F_0%,_#444444_54.48%,_#1F1F1F_100%)]">
      {LinksData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center"
        >
          <img
            src={item.icon}
            alt={item.name}
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Links;
