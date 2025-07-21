import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useOutletContext } from "react-router";
import Slider from "react-slick";

const OurPartners = () => {
  const { t } = useOutletContext();

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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
        breakpoint: 900,
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
    <div className="max-w-[280px] sm:max-w-[480px] md:max-w-[580px] lg:max-w-[800px] xl:max-w-[1032px] mx-auto py-14">
      <div className="relative"> 
        <Slider {...settings} className="mx-auto">
          {t("company.logos", { returnObjects: true }).map((item, index) => (
            <div key={index} > 
              <img 
                src={item.url} 
                className="w-[80px] h-[80px] mx-auto" 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurPartners;