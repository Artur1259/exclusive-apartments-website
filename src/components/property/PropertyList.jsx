import { useNavigate, useOutletContext } from "react-router";
import { MdLocationOn } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";

const PropertyList = ({ filters }) => {
  const navigate = useNavigate();
  const { t } = useOutletContext();
  const propertyList = t("properties.list", { returnObjects: true });

  const filteredPropertyList = propertyList.filter((item) => {
    const typeMatch =
      !filters.typeKey || item.type === filters.typeKey.toLowerCase();

    const saleMatch = !filters.sale || item.sale === filters.sale.toLowerCase();

    const regionMatch =
      !filters.region ||
      item.region.toLowerCase() === filters.region.toLowerCase();

    let roomsMatch = true;
    if (filters.rooms) {
      if (filters.typeKey?.toLowerCase() !== "house") {
        roomsMatch = item.rooms?.toString() === filters.rooms;
      } else {
        roomsMatch = item.floor?.toString() === filters.rooms;
      }
    }

    let priceMatch = true;
    if (filters.price) {
      const priceValue = parseFloat(item.price.replace(/[^\d.]/g, ""));

      if (filters.price === "$0-$5000") {
        priceMatch = priceValue <= 5000;
      } else if (filters.price === "$5000-$6000") {
        priceMatch = priceValue > 5000 && priceValue <= 6000;
      } else if (filters.price === "$6000+") {
        priceMatch = priceValue > 6000;
      }
    }

    let areaMatch = true;
    if (filters.area && item.area) {
      const areaNum = parseInt(item.area);

      if (filters.area === "0-100") {
        areaMatch = areaNum <= 100;
      } else if (filters.area === "100-200") {
        areaMatch = areaNum > 100 && areaNum <= 200;
      } else if (filters.area === "200+") {
        areaMatch = areaNum > 200;
      }
    }

    const purposeMatch =
      !filters.purpose ||
      (item.purpose &&
        item.purpose.toLowerCase() === filters.purpose.toLowerCase());

    return (
      typeMatch &&
      saleMatch &&
      regionMatch &&
      roomsMatch &&
      priceMatch &&
      areaMatch &&
      purposeMatch
    );
  });
  
  const handleClick = (id) => {
    console.log(id);
     navigate(`${id}`)
  }

  return (
    <div className="max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-gray-100/55 p-5">
        {filteredPropertyList.map((item) => (
          <div
            key={item.id}
            className="bg-white p-1  hover:shadow-2xl hover:bg-linear-to-r from-[#f0effd] to-[#dbd9f4] transition-all ease-in-out duration-500 "
            onClick={()=>handleClick(item.id)}
          >
            <img src={item.url} alt={item.description} className="cursor-pointer" />
            <h1 className="px-1 text-md font-semibold">{item.title}</h1>
            <p className="flex items-center gap-2 py-1 capitalize">
              <MdLocationOn />
              {item.region} - {item.type}
            </p>
            <div>
              <p className="flex items-center gap-2 py-1">
                <IoBedSharp size={15} />
                {item.beds}
                <FaBath size={13} /> {item.baths}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-blue-400 font-semibold">{item.price}</p>
              {/* <button className="bg-black text-white px-3 py-2 mt-10 rounded-2xl cursor-pointer">{t("properties.button")}</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
