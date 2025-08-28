  import React, { useState } from "react";
  import { useOutletContext } from "react-router";

  const Mortgage = ({ property }) => {
    const [rangeValue, setRangeValue] = useState(10);
    const { t } = useOutletContext();

    const prePayment = property.originalPrice * (rangeValue / 100);
    return (
      <div className="py-3 w-[70%]">
        <div className="border-[1px] border-gray-300 p-5">
          <h1 className="text-2xl font-semibold text-gray-600 pb-5">
            {t("mortgage.title")}
          </h1>
          <form action="submit" className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-4  gap-5 ">
              <div className="flex flex-col md:col-span-2">
                <label  className="text-gray-500">
                  {t("mortgage.priceLabel")}
                </label>
                <input
                  type="text"
                  className="border-[1px] border-gray-300 px-2 py-1"
                  placeholder={`$ ${property.originalPrice} `}
                />
              </div>
              <div className="flex flex-col">
                <label  className="text-gray-500">
                  {t("mortgage.percentLabel")}
                </label>
                <input
                  type="text"
                  className="border-[1px] border-gray-300 px-2 py-1"
                  placeholder="% 11"
                />
              </div>
              <div className="flex flex-col">
                <label  className="text-gray-500">
                  {t("mortgage.periodLabel")}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className=" w-full border-[1px] border-gray-300 px-2 py-1"
                    placeholder="20"
                  />
                  <p className="text-gray-500 whitespace-nowrap">Year</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div className="flex flex-col gap-2 col-span-2">
                <label  className="text-gray-500">
                  {t("mortgage.prePayment")}
                </label>
                <input
                  type="text"
                  className="border-[1px] border-gray-300 px-2 py-1 "
                  placeholder={`$ ${prePayment.toFixed()}`}
                />
              </div>
              <div className="col-span-2 relative pt-8">
                <div
                  className="absolute top-2  text-xs rounded bg-blue-500 text-white py-1 px-2"
                  style={{
                    left: `calc(${rangeValue}% + ${8 - rangeValue * 0.15}px)`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {rangeValue}%
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={rangeValue}
                  onChange={(e) => setRangeValue(e.target.value)}
                  className=" w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer  accent-blue-500"
                />
              </div>
            </div>
            <div className="w- full flex flex-col gap-2">
                <label className="text-gray-500">
                  {t("mortgage.credit")}
                </label>
              <div className=" flex items-center gap-6">
                <input type="text" 
                className="w-full border-[1px] border-gray-300 px-2 py-1"
                placeholder={`$ ${(property.originalPrice - prePayment).toFixed()} `}
                />
              <button className="w-full bg-white text-blue-500 border-[1px] border-blue-500 py-1 cursor-pointer">
                {t("mortgage.calculateButton")}
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default Mortgage;
