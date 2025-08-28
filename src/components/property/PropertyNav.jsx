import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import PropertyList from "./PropertyList";
import { useTranslation } from "react-i18next";

const PropertyNav = () => {
  const { t } = useOutletContext();
  const { i18n } = useTranslation();
  const propertyTypeLabels = t("properties.type", { returnObjects: true });
  const propertiesFilters = t("properties.filters", { returnObjects: true });

  const [filters, setFilters] = useState({
    sale: "",
    region: "",
    typeKey: propertyTypeLabels?.[0] || "apartment",
    price: "",
    rooms: "",
    area: "",
    floor: "",
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      typeKey: propertyTypeLabels[0] || "Apartment",
    }));
  }, [i18n.language]);

  const getRoomSettings = () => {
    switch (filters.typeKey.toLowerCase()) {
      case "house":
        return {
          label: t("properties.filters.floorsLabel", "floors"),
          options: propertiesFilters.floors || [],
        };
      case "office":
      case "land":
        return {
          label: t("properties.filters.purposeLabel", "purpose"),
          options:
            propertiesFilters.purpose?.[filters.typeKey.toLowerCase()] || [],
        };
      default:
        return {
          label: t("properties.filters.roomsLabel", "rooms"),
          options: propertiesFilters.rooms || [],
        };
    }
  };

  const shouldShowArea = !["apartment", "office", "house"].includes(
    filters.typeKey.toLowerCase()
  );
  const roomSettings = getRoomSettings();

  return (
    <div className="max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto py-10">
      <nav>
        <div className="w-full bg-[#f0effd] px-1">
          <ul className="flex items-center gap-5 pt-1">
            {propertyTypeLabels.map((key, index) => (
              <li
                key={index}
                onClick={() =>
                  setFilters((prev) => ({ ...prev, typeKey: key }))
                }
                className={`${
                  filters.typeKey === key
                    ? "bg-white text-blue-600 border-t-1 border-t-gray-200 border-x-1 border-x-gray-200 rounded-t-lg "
                    : " text-gray-600"
                } px-5 py-2  cursor-pointer `}
              >
                {propertyTypeLabels[index]}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-5 py-2 [&>select:last-of-type]:border-r-2">
          {/* Sale - միշտ ցուցադրվում է */}
          <select
            className="capitalize text-sm px-5 py-2 border-y-2 border-l-2 border-gray-200 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtNiA5IDYgNiA2LTYiLz48L3N2Zz4=')] bg-no-repeat bg-[position:right_0.5rem_center] pr-8 nth-[1]:bg-[#f0effd]"
            value={filters.sale}
            onChange={(e) => setFilters({ ...filters, sale: e.target.value })}
          >
            <option value="">
              {t("properties.filters.saleLabel", "sale")}
            </option>
            {propertiesFilters.sale.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Region - միշտ ցուցադրվում է */}
          <select
            className="capitalize text-sm px-5 py-2 border-y-2 border-l-2 border-gray-200 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtNiA5IDYgNiA2LTYiLz48L3N2Zz4=')] bg-no-repeat bg-[position:right_0.5rem_center] pr-8 nth-[1]:bg-[#f0effd]"
            value={filters.region}
            onChange={(e) => setFilters({ ...filters, region: e.target.value })}
          >
            <option value="">
              {t("properties.filters.regionLabel", "region")}
            </option>
            {propertiesFilters.region.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Price - միշտ ցուցադրվում է */}
          <select
            className="capitalize text-sm px-5 py-2 border-y-2 border-l-2 border-gray-200 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtNiA5IDYgNiA2LTYiLz48L3N2Zz4=')] bg-no-repeat bg-[position:right_0.5rem_center] pr-8 nth-[1]:bg-[#f0effd]"
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          >
            <option value="">
              {t("properties.filters.priceLabel", "price")}
            </option>
            {propertiesFilters.price.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Rooms/Floors/Purpose - փոխվում է ըստ տեսակի */}
          <select
            className="capitalize text-sm px-5 py-2 border-y-2 border-l-2 border-gray-200 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtNiA5IDYgNiA2LTYiLz48L3N2Zz4=')] bg-no-repeat bg-[position:right_0.5rem_center] pr-8 nth-[1]:bg-[#f0effd]"
            value={filters.rooms}
            onChange={(e) => setFilters({ ...filters, rooms: e.target.value })}
          >
            <option value="">{roomSettings.label}</option>
            {roomSettings.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Area - ցուցադրվում է միայն որոշ տեսակների համար */}
          {shouldShowArea && (
            <select
              className="capitalize text-sm px-5 py-2 border-y-2 border-l-2 border-gray-200 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtNiA5IDYgNiA2LTYiLz48L3N2Zz4=')] bg-no-repeat bg-[position:right_0.5rem_center] pr-8 nth-[1]:bg-[#f0effd]"
              value={filters.area}
              onChange={(e) => setFilters({ ...filters, area: e.target.value })}
            >
              <option value="">
                {t("properties.filters.areaLabel", "area")}
              </option>
              {propertiesFilters.area.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
      </nav>
      <PropertyList filters={filters} />
    </div>
  );
};

export default PropertyNav;
