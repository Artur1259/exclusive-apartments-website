import { useOutletContext } from "react-router";
import {
  FaCheck,
  FaLocationDot,
  FaTemperatureHigh,
  FaXTwitter,
} from "react-icons/fa6";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaOdnoklassniki,
  FaShareAlt,
  FaVk,
  FaWifi,
} from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { SiFireship } from "react-icons/si";
import { GiWaterDrop } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineFireplace } from "react-icons/md";
import Mortgage from "./Mortgage";

const PropertyDetailInfoPage = ({ property }) => {
  const { t, lang } = useOutletContext();
  console.log(lang);
  let square = "";
  if (lang === "en") { 
    square = "SQ. M.";
  } else if (lang === "ru") {
    square = "КВ. М.";
  } else {
    square = "Ք.Մ.";
  }

  const icons = {
    "<MdOutlineFireplace  />": MdOutlineFireplace,
    "<FaWifi />": FaWifi,
    "<FaTemperatureHigh />": FaTemperatureHigh,
    "<BsLightningCharge />": BsLightningCharge,
    "<TbAirConditioning />": TbAirConditioning,
    "<SiFireship />": SiFireship,
    "<GiWaterDrop />": GiWaterDrop,
  };

  return (
    <div className="max-w-[380px] sm:max-w-[620px] md:max-w-[820px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto py-2 bg-gray-100">
      <div className="w-full lg:w-[75%] flex justify-between border-b-[1px] border-b-gray-200 px-2">
        <div className="flex gap-2 items-center text-gray-800 text-lg">
          <FaLocationDot />
          <span>{property.location}</span>
        </div>
        <div className="flex gap-2 items-center cursor-pointer group relative">
          <FaShareAlt color="#3B82F6" />
          <span className="text-[#3B82F6] font-semibold uppercase">
            {t("properties.agency.share")}
          </span>
          <div className="hidden group-hover:flex group-hover:absolute group-hover:p-4 group-hover:bg-white group-hover:shadow-orange-400 group-hover:items-center group-hover:justify-around group-hover:gap-1 group-hover:right-0 group-hover:top-[30px]">
            <a href="" className="p-3 rounded-full border border-blue-700">
              <FaFacebookF className="text-blue-700" size={13} />
            </a>
            <a href="" className="p-3 rounded-full border border-orange-400">
              <FaOdnoklassniki color="orange" size={13} />
            </a>
            <a href="" className="p-3 rounded-full border border-blue-700">
              <FaVk className="text-blue-700" size={13} />
            </a>
            <a href="" className="p-3 rounded-full border border-black">
              <FaXTwitter color="black" size={13} />
            </a>
            <a href="" className="p-3 rounded-full border border-gray-400">
              <IoMail color="gray" size={13} />
            </a>
          </div>
          <div className="absolute hidden group-hover:block top-[18px] right-10 after:content-[''] after:absolute after:top-[3px] after:right-0 after:w-0 after:h-0 after:border-l-[10px] after:border-r-[10px] after:border-b-[10px] after:border-l-transparent after:border-r-transparent after:border-b-white"></div>
        </div>
      </div>
      <div className="w-full lg:w-[75%] flex justify-between pt-2 px-2">
        <div>
          <div className=" flex items-center gap-1 py-1 border-b-[1px] border-b-gray-200">
            <FaInfoCircle className="text-blue-700 cursor-pointer" />
            <p className="text-2xl font-bold text-blue-700">{property.price}</p>
          </div>
          <div className="flex items-center gap-4 py-2 border-b-[1px] border-b-gray-200">
            <span className="text-gray-500 uppercase text-xs">
              {property.areaLabel}
            </span>{" "}
            <span className="font-semibold text-lg text-gray-700">
              {property.area} {square}
            </span>
            <div className="flex flex-col gap-0.5">
              <div className="w-[1px] h-1 bg-gray-400"></div>
              <div className="w-[1px] h-1 bg-gray-400"></div>
              <div className="w-[1px] h-1 bg-gray-400"></div>
            </div>
            <span className="text-gray-500 uppercase text-xs">
              {property.roomsLabel}
            </span>{" "}
            <span className="font-semibold text-lg text-gray-700">
              {property.rooms}
            </span>
            <div className="flex flex-col gap-0.5">
              <div className="w-[1px] h-1 bg-gray-400"></div>
              <div className="w-[1px] h-1 bg-gray-400"></div>
              <div className="w-[1px] h-1 bg-gray-400"></div>
            </div>
            {property.type === "apartment" && (
              <>
                <span className="text-gray-500 uppercase text-xs">
                  {property.floorLabel}/{property.storeysLabel}
                </span>{" "}
                <span className="font-semibold text-lg text-gray-700">
                  {property.floor}/{property.storeys}
                </span>
              </>
            )}
          </div>
          <div className="py-2">{property.info}</div>
          <div className="flex gap-2">
            <span className="text-gray-400">{property.createdLabel}</span>:{" "}
            <span className="flex items-center gap-2">
              <FaCalendarAlt color="#3B82F6" />
              {property.createdAt}
            </span>
          </div>
        </div>
      </div>
      {/* Facilities */}

      {property.facilities && (
        <div className="p-5 w-full lg:w-[85%]">
          <h1 className="text-3xl font-bold py-2">
            {property.facilitiesLabel}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {property.facilities.map((facility, index) => {
              const IconComponent = icons[facility.icon];
              return (
                <div key={index} className="flex items-center gap-2 py-2">
                  <div className="p-2 bg-blue-400 rounded">
                    {IconComponent && <IconComponent color="white" size={20} />}
                  </div>
                  <span className="text-gray-700">{facility.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ADDITIONAL INFORMATION */}

      {property.additionalInfo && (
        <div className="p-5 w-full lg:w-[80%]">
          <h1 className="text-3xl font-bold py-4">
            {property.additionalInfoLabel}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {property.additionalInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheck className="text-blue-700 " size={25} />
                {info}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="w-full bg-gray-200 p-7 flex items-center justify-center gap-2">
        <i className="text-gray-700 uppercase">
          {t("properties.agency.moreInfo")}
        </i>
        <button className="px-5 py-2 bg-blue-700 text-white uppercase cursor-pointer">
          {t("properties.agency.buttonRealtor")}
        </button>
      </div>
     {property.sale === "for sale" ? <Mortgage property={property}/>: null}
    </div>
  );
};

export default PropertyDetailInfoPage;
