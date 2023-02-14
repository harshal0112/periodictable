import React, { useState } from "react";
import data from "./PeriodicTableJSON.json";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";

const colorMap = {
  "noble gas": "#cc9634",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "polyatomic nonmetal": "#189f5d",
  "alkali metal": "#8F2D56",
  "transition metal": "#3f3f46",
  "post-transition metal": "#4AABAF",
  lanthanide: "#218380",
  metalloid: "#7347cc",
  actinide: "#cc47a2",
  "unknown, probably transition metal": "#ff4300",
  "unknown, probably post-transition metal": "#ff4300",
  "unknown, predicted to be noble gas": "#ff4300",
  "unknown, probably metalloid": "#ff4300",
  "unknown, but predicted to be an alkali metal": "#ff4300",
};

function sortByProperty(property) {
  return function (a, b) {
    if (a[property] > b[property]) return 1;
    else if (a[property] < b[property]) return -1;

    return 0;
  };
}

function ListSearch(props) {
  const [searchEntry, setSearchEntry] = useState("");
  const SearchText = (event) => {
    const { value } = event.target;
    setSearchEntry(value);
  };
  const [listFilter, setListFilter] = useState("number");
  const setFilterList = (event) => {
    setListFilter(event);
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 inset-0 w-full bg-black bg-opacity-50 backdrop-brightness-50 p-3 pt-14 pb-36 flex items-center justify-center ${
          props.isListSearch === "Visible" ? "" : "hidden"
        }`}
        onClick={() => props.showListSearch("hidden")}
      >
        <div
          className={`w-full h-full max-w-lg bg-transparent rounded-sm ${
            props.isModal === "Visible" ? "opacity-0" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <BsSearch />
              </span>
            </div>
            <input
              type="text"
              className="block w-full h-11 rounded-md border-0 pl-10 pr-12 focus:outline-none sm:text-sm text-black"
              placeholder="Search by element name"
              onChange={(e) => SearchText(e)}
            />
          </div>
          <div className="w-full h-9 text-[11px] bg-zinc-500 bg-opacity-20 mt-5 flex gap-2 px-1 rounded items-center">
            <button
              className={`bg-zinc-500 bg-opacity-30 rounded px-3 h-7 flex items-center ${
                listFilter === "number"
                  ? "bg-gray-200 bg-opacity-100 text-black"
                  : ""
              }`}
              onClick={() => setFilterList("number")}
            >
              ATOMIC NUMBER
            </button>
            <button
              className={`bg-zinc-500 bg-opacity-30 rounded px-3 h-7 flex items-center ${
                listFilter === "name"
                  ? "bg-gray-200 bg-opacity-100 text-black"
                  : ""
              }`}
              onClick={() => setFilterList("name")}
            >
              NAME
            </button>
            <button
              className={`bg-zinc-500 bg-opacity-30 rounded px-3 h-7 flex items-center ${
                listFilter === "symbol"
                  ? "bg-gray-200 bg-opacity-100 text-black"
                  : ""
              }`}
              onClick={() => setFilterList("symbol")}
            >
              SYMBOL
            </button>
          </div>
          <div className="mt-5 w-full h-full overflow-auto">
            {data.elements.sort(sortByProperty(listFilter)).map(
              (element) =>
                element.name
                  .toLowerCase()
                  .includes(searchEntry.toLowerCase()) && (
                  <div
                    className="w-full h-16 bg-gray-800 mb-2 flex items-center rounded-md cursor-pointer"
                    key={element.number}
                    onClick={(e) => props.showModal("Visible", element)}
                  >
                    <div
                      className="h-full w-16 rounded-md flex items-center justify-center"
                      style={{ backgroundColor: colorMap[element.category] }}
                    >
                      <h1 className="text-lg">{element.symbol}</h1>
                    </div>
                    <div className="flex flex-col ml-5 items-start w-1/2 h-full justify-center">
                      <small className="text-[10px] text-zinc-400">
                        {element.number}. NAME
                      </small>
                      <h1 className="text-base">{element.name}</h1>
                    </div>
                    <div className="flex flex-col items-start w-1/2 h-full justify-center">
                      <small className="text-[10px] text-zinc-400">
                        DENSITY
                      </small>
                      <h1 className="text-base">
                        {element.density} g/cm<sup>3</sup>
                      </h1>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListSearch;
