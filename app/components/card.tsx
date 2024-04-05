import { IoLocationOutline } from "react-icons/io5";
import { SiWindows } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { IEvent } from "~/types/types";

export const Uicard = (card: IEvent) => {
  return (
    <div className="flex border-2 min-h-screen border-gray-300 m-3 w-96 flex-col justify-items-center items-center">
      <div className="h-full">
        <img className="h-full object-cover" src={card.image} alt="Image" />
        <h1 className="p-2 text-blue-500 text-xl">{card.heading}</h1>
      </div>
      <div className="h-28 flex flex-wrap overflow-y-scroll p-2">
        <p className="h-full flex items-center justify-center">{card.des}</p>
      </div>
      <div className="flex self-start flex-col p-2">
        <div className="flex items-center">
          <IoLocationOutline />
          <p className="ml-2">{card.location}</p>
        </div>
        <div className="flex items-center">
          <SiWindows />
          <p className="ml-2">{card.sector}</p>
        </div>
        <div className="flex items-center">
          <TbWorld />
          <p className="ml-2">{card.language}</p>
        </div>
      </div>
      <div className="border-t-2 w-full p-2">
        <p className="text-xl font-custom font-normal">Learning Experts</p>
        <img className="rounded-full" src={card.experts} />
      </div>
    </div>
  );
};
