import React, { useContext, useEffect, useState, useCallback } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoIosArrowForward } from "react-icons/io";

const MainCollection = ({ searchQuery, initialCategory }) => {
  const { products } = useContext(ShopContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [value, setValue] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilter = e => {
    const selectedCategory = e.target.value;
    setSelectedCategory(prev => (prev === selectedCategory ? null : selectedCategory));
  };

  const applyFilter = useCallback(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter(item => item.subcategory === selectedCategory);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase().trim()));
    }

    setFilterProduct(filtered);
  }, [selectedCategory, searchQuery, products]);

  useEffect(() => {
    applyFilter();
  }, [applyFilter]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 py-10">
      <div className="min-w-[200px] mt-16 sm:min-w-[250px]">
        <p
          onClick={() => {
            setValue(!value);
          }}
          className="ml-6 text-2xl mt-[-45px] mb-10 font-semibold flex items-center cursor-pointer gap-2 transition duration-300 ease-in-out sm:hidden"
        >
          Filter
          <IoIosArrowForward className={`pt-1 transform ${value ? "rotate-90" : ""} transition-transform duration-300`} />
        </p>

        <div className={`ml-5 p-4 mt-4 border border-gray-300 transition-all duration-300 ease-in-out ${value ? "" : "hidden sm:block"}`}>
          <p className="mb-3 text-lg font-semibold text-gray-800">CATEGORIES</p>
          <div className="flex flex-col gap-3 text-sm font-medium text-gray-600">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-[#090909] w-4 h-4"
                checked={selectedCategory === "Items for sale"}
                onChange={() => handleFilter({ target: { value: "Items for sale" } })}
              />
              <span>Items for sale</span>
            </label>
            <hr className="border-t border-gray-300" />
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-[#090909] w-4 h-4"
                checked={selectedCategory === "Items for rent"}
                onChange={() => handleFilter({ target: { value: "Items for rent" } })}
              />
              <span>Items for rent</span>
            </label>
            <hr className="border-t border-gray-300" />
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-[#090909] w-4 h-4"
                checked={selectedCategory === "Items to share"}
                onChange={() => handleFilter({ target: { value: "Items to share" } })}
              />
              <span>Items to share</span>
            </label>
            <hr className="border-t border-gray-300" />
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-[#090909] w-4 h-4"
                checked={selectedCategory === "Items request"}
                onChange={() => handleFilter({ target: { value: "Items request" } })}
              />
              <span> Items request</span>
            </label>
            <hr className="border-t border-gray-300" />
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-[#090909] w-4 h-4"
                checked={selectedCategory === "Services"}
                onChange={() => handleFilter({ target: { value: "Services" } })}
              />
              <span>Services</span>
            </label>
            <hr className="border-t border-gray-300" />
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-[#090909] w-4 h-4"
                checked={selectedCategory === "Events"}
                onChange={() => handleFilter({ target: { value: "Events" } })}
              />
              <span>Events</span>
            </label>
            <hr className="border-t border-gray-300" />
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-[#090909] w-4 h-4"
                checked={selectedCategory === "Resources"}
                onChange={() => handleFilter({ target: { value: "Resources" } })}
              />
              <span>Resources</span>
            </label>
            <hr className="border-t border-gray-300" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="mb-10 ">
          <h1 data-aos="fade-right" className="sm:text-5xl text-3xl ml-7 font-semibold mt-5 sm:text-left">
            ALL PRODUCTS{" "}
          </h1>
        </div>
        <div className="mt-[80px] sm:mt-8 mb-5 flex flex-wrap gap-4 justify-center px-4 sm:px-0">
          {filterProduct.map((item, index) => (
            <div data-aos="fade-right" key={index} className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] pb-2 bg-white rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCollection;
