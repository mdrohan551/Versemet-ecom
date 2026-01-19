import React from "react";
import type { MapData } from "../../../WEB/Typeinterface/InterfaceType";
import { HiOutlineLocationMarker } from "react-icons/hi";


interface Props {
  data: MapData;
}

const Location: React.FC<Props> = ({ data }) => {
  return (

    <div className="w-full p-0 " >
      {/* Title + Icon: Already clickable and smart */}

      {/* Map Embed */}
      <div className="relative">
        <a
          href={data.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xl font-semibold text-gray-700 bg-white ring-1 ring-Light_primary px-10 py-5 rounded-2xl shadow-xl  hover:bg-gray-50 transition-colors absolute top-2/5 left-1/4 z-20"
        >
          <HiOutlineLocationMarker className="text-primary w-6 h-6" />
          <span>{data.title}</span>
        </a>

        <div className='w-50 h-50 blur-[3rem] rounded-full bg-primary/80 dark:bg-Dark_primary absolute  left-1/4 top-20 z-10'></div>
        <img src={data.image} alt="map" className="w-fit h-fit z-0" />
      </div>








    </div>

  );
};

export default Location;
