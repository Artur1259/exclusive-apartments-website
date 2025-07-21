import { useOutletContext } from "react-router";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PaginationSection = () => {
  const { t } = useOutletContext();
  const cities = t("pagination.cities", { returnObjects: true });

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-prev-arrow"
      style={{
        backgroundColor: "gray",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        color: "white",
        border: "none",
        position: "absolute",
        left: "-50px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaChevronLeft />
    </button>
  );
  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-next-arrow"
      style={{
        backgroundColor: "gray",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        color: "white",
        border: "none",
        position: "absolute",
        right: "-50px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaChevronRight />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1152,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1032,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full h-[80vh] flex items-center bg-[#f0effd] py-10">
      <div className="max-w-[300px] sm:max-w-[500px] md:max-w-[640px] lg:max-w-[890px] xl:max-w-[1032px] mx-auto ">
        <div className="slider-container">
          <Slider {...settings}>
            {cities.map((city) => (
              <div key={city.name} className="">
                <div className="h-full flex flex-col items-center">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="h-[210px] w-[210px] rounded-full"
                  />
                  <h1 className="text-xl font-bold py-5">{city.name}</h1>
                  <p className="text-gray-600 text-2xl">{city.properties}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PaginationSection;
