import {
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
  FaHome,
} from "react-icons/fa";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import { useNavigate, useOutletContext, useParams } from "react-router";
import Slider from "react-slick";
import { useState } from "react";
import PropertyDetailInfoPage from "./PropertyDetailInfoPage";

const PropertyDetailPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useOutletContext();
  const propertyList = t("properties.list", { returnObjects: true });
  const image = t("properties.image");

  const property = propertyList.find((item) => {
    return item.id == id;
  });

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="custom-next-arrow"
        style={{
          width: "40px",
          height: "40px",
          position: "absolute",
          right: "10px",
          top: "50%",
          background: "rgb(239, 236, 246)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          cursor: "pointer",
          zIndex: 1,
        }}
        onClick={onClick}
      >
        <FaChevronRight className="text-blue-400" size={25} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="custom-prev-arrow"
        style={{
          width: "40px",
          height: "40px",
          position: "absolute",
          left: "10px",
          top: "50%",
          background: "rgb(239, 236, 246)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          cursor: "pointer",
          zIndex: 1,
        }}
        onClick={onClick}
      >
        <FaChevronLeft className="text-blue-400 " size={25} />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (next) => setCurrentSlide(next),
  };

  const handleClick = () => {
    console.log("clicked");
  };


  return (
    <>
    <div className="max-w-[380px] sm:max-w-[620px] md:max-w-[820px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto">
      <div className="py-3 flex items-center gap-2">
        <span
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-400 uppercase relative after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-400 cursor-pointer"
        >
          <FaHome />
          {t("properties.home")}
        </span>
        <span className="text-gray-400">/</span>
        <span className="uppercase text-gray-400 ">
          {property.type + " " + property.sale}
        </span>
      </div>
      <div className="flex h-[500px] pt-10">
        <div className="slider-container md:w-[75%] w-[100%] h-full relative">
          <div className="absolute top-5 left-5 text-gray-400 flex items-center gap-2 bg-gray-100 px-2 py-1 z-10">
            <FaCamera />
            {currentSlide + 1}/{property.urlList.length}
          </div>

          <div className="absolute bottom-5 right-5 bg-gray-100 flex items-center justify-center p-1 z-10">
            <button
              onClick={() => setZoomed(!zoomed)}
              className="cursor-pointer"
            >
              <AiOutlineArrowsAlt size={20} />
            </button>
          </div>

          <Slider {...settings} className="h-full">
            {property.urlList.map((item, index) => (
              <div key={index} className="w-full h-full relative">
                <img src={item} className="w-full h-full object-cover" />
              </div>
            ))}
          </Slider>
        </div>
        <div
          className="hidden md:block w-[25%] h-full bg-cover bg-center bg-no-repeat relative p-2"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

          <div className="w-[92%] h-[92%] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex items-center gap-2 lg:p-2 border-b border-gray-300">
              <div className="w-11 h-11 rounded-full border-2 border-gray-300">
                <img
                  src={property.propertyAgency.logo}
                  className="w-full h-full bg-cover bg-center rounded-full cursor-pointer"
                  onClick={handleClick}
                />
              </div>
              <div>
                <p className="text-[10px] text-gray-300">
                  {t("properties.agency.title")}
                </p>
                <p className="text-[12px] lg:text-[14px] text-gray-500">
                  {property.propertyAgency.name}
                </p>
                <span className="text-xs flex items-center lg:gap-1 text-gray-500">
                  <IoMail color="gray" className="pt-1" size={15} />
                  {property.propertyAgency.email}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between p-5">
              <div className="py-7 lg:py-10">
                {property.propertyAgency.phone.map((item, index) => (
                  <div
                    key={index}
                    className="tracking-wider text-gray-600 text-md lg:text-lg"
                  >
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="text-center text-gray-500 text-xs">
                {t("properties.agency.description")}
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 px-5 bg-gray-100 py-5">
              <button className="w-full border border-blue-400 text-blue-500 py-1 text-[14px] font-semibold cursor-pointer hover:bg-blue-400 hover:text-white">
                {t("properties.agency.buttonComplain")}
              </button>
              <button className="w-full text-white text-[14px] bg-blue-400 py-1 font-semibold cursor-pointer hover:bg-blue-500">
                {t("properties.agency.buttonRequest")}
              </button>
            </div>
          </div>
        </div>
      </div>
      {zoomed && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50">
          <div className="slider-container w-[70%] h-full relative">
            <div className="absolute top-5 left-5 text-gray-400 flex items-center gap-2 bg-gray-100 px-2 py-1 z-10">
              <FaCamera />
              {currentSlide + 1}/{property.urlList.length}
            </div>

            <div className="absolute bottom-5 right-5 bg-gray-100 flex items-center justify-center p-1 z-10">
              <button
                onClick={() => setZoomed(!zoomed)}
                className="cursor-pointer"
              >
                <TbArrowsDiagonalMinimize2 size={20} />
              </button>
            </div>

            <Slider {...settings} className="h-full">
              {property.urlList.map((item, index) => (
                <div key={index} className="w-full h-full relative">
                  <img src={item} className="w-full h-full object-cover" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
    <PropertyDetailInfoPage property={property} />
    </>
  );
};

export default PropertyDetailPage;
