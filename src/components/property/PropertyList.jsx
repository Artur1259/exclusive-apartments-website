import { useState } from 'react';
import {  useOutletContext } from 'react-router';

const PropertyList = () => {
    const { t } = useOutletContext();
  const allProperties = t("properties.list", { returnObjects: true });

  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState({
    region: "",
    type: ""
  });

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const filteredProperties = allProperties.filter(prop => {
    return (
      (!filters.region || prop.region === filters.region) &&
      (!filters.type || prop.type === filters.type) 
    );
  });

  return (
    <div className="max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto py-10">
      <button
        className="bg-black text-white px-4 py-2 rounded mb-4"
        onClick={() => setFiltersVisible(!filtersVisible)}
      >
        {t("properties.button")}
      </button>

      {filtersVisible && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {["region", "type"].map((filterKey) => (
            <div key={filterKey}>
              <label className="block font-semibold capitalize">
                {filterKey}
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => handleFilterChange(filterKey, e.target.value)}
                value={filters[filterKey]}
              >
                <option value="">All</option>
                {t(`properties.filters.${filterKey}`, { returnObjects: true }).map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProperties.map(property => (
          <div key={property.id} className="border rounded shadow p-4">
            <h3 className="font-bold text-lg">{property.title}</h3>
            <p>{t("properties.price")}: ${property.price}</p>
            <p className="text-sm text-gray-500">
              {property.region} - {property.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyList