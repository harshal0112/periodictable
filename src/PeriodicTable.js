import React, { useState } from "react";
import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";

const colorMap = {
  "noble gas": "#cc9634",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "polyatomic nonmetal": "#189f5d",
  "alkali metal": "#8F2D56",
  "transition metal": "#56423e",
  "post-transition metal": "#1e445d",
  lanthanide: "#218380",
  metalloid: "#4d42b8",
  actinide: "#cc47a2",
  "unknown, probably transition metal": "#ff4300",
  "unknown, probably post-transition metal": "#ff4300",
  "unknown, predicted to be noble gas": "#ff4300",
  "unknown, probably metalloid": "#ff4300",
  "unknown, but predicted to be an alkali metal": "#ff4300",
};

const PeriodicTable = (props) => {
  const [selectedCat, setSelectedCat] = useState("");
  const ElementCatSelect = (category) => {
    setSelectedCat(category);
  };
  return (
    <>
      <div className="periodic-table p-5 overflow-x-auto">
        {data.elements.map((element) => (
          <div
            className={`element shadow-2xl hover:scale-150 hover:z-10 cursor-pointer transform active:scale-95 hover:shadow hover:shadow-black transition-transform ${
              selectedCat &&
              (selectedCat === element.category ||
              (selectedCat === "unknown" &&
                element.category.includes(selectedCat))
                ? "opacity-100 shadow shadow-black"
                : "opacity-5 pointer-events-none")
            }`}
            key={element.name}
            style={{
              gridRow: element.ypos,
              gridColumn: element.xpos,
              border: "0px solid #000000",
              backgroundColor: colorMap[element.category],
              borderRadius: "3px",
            }}
            onClick={(e) => props.showModal("Visible", element)}
          >
            <strong className="text-xl">{element.symbol}</strong>
            <small className="atomic-weight">
              {element.atomic_mass
                .toString()
                .slice(0, element.atomic_mass.toString().indexOf(".") + 4)}
            </small>
            <small className="number">{element.number}</small>
            <small className="name">{element.name}</small>
          </div>
        ))}
        <div
          className={`element pointer-events-none no-element ${
            selectedCat === "lanthanide"
              ? "opacity-100 shadow-2xl shadow-black"
              : !selectedCat
              ? "opacity-100"
              : "opacity-5"
          }`}
          style={{
            gridRow: 6,
            gridColumn: 3,
            border: "0px solid #000000",
            backgroundColor: colorMap["lanthanide"],
            borderRadius: "3px",
          }}
        >
          <strong>*</strong>
          <small className="number">57-71</small>
          <small className="name">Lanthanides</small>
        </div>
        <div
          className={`element pointer-events-none no-element ${
            selectedCat === "actinide"
              ? "opacity-100 shadow-2xl shadow-black"
              : !selectedCat
              ? "opacity-100"
              : "opacity-5"
          }`}
          style={{
            gridRow: 7,
            gridColumn: 3,
            border: "0px solid #000000",
            backgroundColor: colorMap["actinide"],
            borderRadius: "3px",
          }}
        >
          <strong>**</strong>
          <small className="number">89-103</small>
          <small className="name">Actinides</small>
        </div>
        <div
          className="relative"
          style={{
            gridRow: "1 / 4",
            gridColumn: "3 / 9",
            backgroundColor: "transparent",
          }}
        >
          <button
            className={`w-full ml-4 flex justify-center items-center p-1 mb-2 rounded-full bg-gray-900 ${
              selectedCat
                ? "opacity-100 shadow shadow-black"
                : "opacity-0 pointer-events-none"
            } transform transition-transform active:scale-95 absolute top-[-15px]`}
            onClick={(e) => ElementCatSelect("")}
          >
            <h1 className="text-sm">Clear Filter</h1>
          </button>
          <ul className="list list1 ml-8 text-gray-700 dark:text-gray-100 mt-5">
            <li
              className={`flex flex-row content-center justify-start transform cursor-pointer transition-transform w-48 p-1 hover:bg-gray-900 rounded-full hover:shadow hover:shadow-black active:scale-95 ${
                selectedCat === "diatomic nonmetal"
                  ? "shadow shadow-black bg-gray-900"
                  : ""
              }`}
              onClick={(e) => ElementCatSelect("diatomic nonmetal")}
            >
              <div
                className="w-5 h-100 rounded-full"
                style={{ backgroundColor: colorMap["diatomic nonmetal"] }}
              ></div>
              <small> &nbsp; &nbsp; Diatomic NonMetal</small>
            </li>
            <li
              className={`flex flex-row content-center justify-start transform cursor-pointer transition-transform w-48 p-1 mr-5 hover:bg-gray-900 rounded-full hover:shadow hover:shadow-black active:scale-95 ${
                selectedCat === "alkali metal"
                  ? "shadow shadow-black bg-gray-900"
                  : ""
              }`}
              onClick={(e) => ElementCatSelect("alkali metal")}
            >
              <div
                className="w-5 h-100 rounded-full"
                style={{ backgroundColor: colorMap["alkali metal"] }}
              ></div>
              <small> &nbsp; &nbsp; Alkali Metals</small>
            </li>
            <li
              className={`flex flex-row content-center justify-start transform cursor-pointer transition-transform w-48 p-1 hover:bg-gray-900 rounded-full hover:shadow hover:shadow-black active:scale-95 ${
                selectedCat === "alkaline earth metal"
                  ? "shadow shadow-black bg-gray-900"
                  : ""
              }`}
              onClick={(e) => ElementCatSelect("alkaline earth metal")}
            >
              <div
                className="w-5 h-100 rounded-full"
                style={{ backgroundColor: colorMap["alkaline earth metal"] }}
              ></div>
              <small> &nbsp; &nbsp; Alkaline Earth Metals</small>
            </li>
            <li
              className={`flex flex-row content-center justify-start transform cursor-pointer transition-transform w-48 p-1 hover:bg-gray-900 rounded-full hover:shadow hover:shadow-black active:scale-95 ${
                selectedCat === "transition metal"
                  ? "shadow shadow-black bg-gray-900"
                  : ""
              }`}
              onClick={(e) => ElementCatSelect("transition metal")}
            >
              <div
                className="w-5 h-100 rounded-full"
                style={{ backgroundColor: colorMap["transition metal"] }}
              ></div>
              <small> &nbsp; &nbsp; Transition Metals</small>
            </li>
            <li
              className={`flex flex-row content-center justify-start transform cursor-pointer transition-transform w-48 p-1 hover:bg-gray-900 rounded-full hover:shadow hover:shadow-black active:scale-95 ${
                selectedCat === "post-transition metal"
                  ? "shadow shadow-black bg-gray-900"
                  : ""
              }`}
              onClick={(e) => ElementCatSelect("post-transition metal")}
            >
              <div
                className="w-5 h-100 rounded-full"
                style={{ backgroundColor: colorMap["post-transition metal"] }}
              ></div>
              <small> &nbsp; &nbsp; Post Transition Metals</small>
            </li>
            <li
              className={`flex flex-row content-center justify-start transform cursor-pointer transition-transform w-48 p-1 hover:bg-gray-900 rounded-full hover:shadow hover:shadow-black active:scale-95 ${
                selectedCat === "metalloid"
                  ? "shadow shadow-black bg-gray-900"
                  : ""
              }`}
              onClick={(e) => ElementCatSelect("metalloid")}
            >
              <div
                className="w-5 h-100 rounded-full"
                style={{ backgroundColor: colorMap["metalloid"] }}
              ></div>
              <small> &nbsp; &nbsp; Metalloids</small>
            </li>
            <li
              className={`flex flex-row content-center justify-start transform cursor-pointer transition-transform w-48 p-1 hover:bg-gray-900 rounded-full hover:shadow hover:shadow-black active:scale-95 ${
                selectedCat === "polyatomic nonmetal"
                  ? "shadow shadow-black bg-gray-900"
                  : ""
              }`}
              onClick={(e) => ElementCatSelect("polyatomic nonmetal")}
            >
              <div
                className="w-5 h-100 rounded-full"
                style={{ backgroundColor: colorMap["polyatomic nonmetal"] }}
              ></div>
              <small> &nbsp; &nbsp; Polyatomic NonMetal</small>
            </li>
            <li
              className={`flex flex-row content-center justify-start transform cursor-pointer transition-transform w-48 p-1 hover:bg-gray-900 rounded-full hover:shadow hover:shadow-black active:scale-95 ${
                selectedCat === "noble gas"
                  ? "shadow shadow-black bg-gray-900"
                  : ""
              }`}
              onClick={(e) => ElementCatSelect("noble gas")}
            >
              <div
                className="w-5 h-100 rounded-full"
                style={{ backgroundColor: colorMap["noble gas"] }}
              ></div>
              <small> &nbsp; &nbsp; Noble Gas</small>
            </li>
            <li
              className={`flex flex-row content-center justify-start transform cursor-pointer transition-transform w-48 p-1 hover:bg-gray-900 rounded-full hover:shadow hover:shadow-black active:scale-95 ${
                selectedCat === "unknown"
                  ? "shadow shadow-black bg-gray-900"
                  : ""
              }`}
              onClick={(e) => ElementCatSelect("unknown")}
            >
              <div
                className="w-5 h-100 rounded-full"
                style={{ backgroundColor: "orangered" }}
              ></div>
              <small> &nbsp; &nbsp; Unknown</small>
            </li>
            <li
              className={`flex flex-row content-center justify-start transform cursor-pointer transition-transform w-48 p-1 hover:bg-gray-900 rounded-full hover:shadow hover:shadow-black active:scale-95 ${
                selectedCat === "lanthanide"
                  ? "shadow shadow-black bg-gray-900"
                  : ""
              }`}
              onClick={(e) => ElementCatSelect("lanthanide")}
            >
              <div
                className="w-5 h-100 rounded-full"
                style={{ backgroundColor: colorMap["lanthanide"] }}
              ></div>
              <small> &nbsp; &nbsp; Lanthanides</small>
            </li>
            <li
              className={`flex flex-row content-center justify-start transform cursor-pointer transition-transform w-48 p-1 hover:bg-gray-900 rounded-full hover:shadow hover:shadow-black active:scale-95 ${
                selectedCat === "actinide"
                  ? "shadow shadow-black bg-gray-900"
                  : ""
              }`}
              onClick={(e) => ElementCatSelect("actinide")}
            >
              <div
                className="w-5 h-100 rounded-full"
                style={{ backgroundColor: colorMap["actinide"] }}
              ></div>
              <small> &nbsp; &nbsp; Actinides</small>
            </li>
          </ul>
        </div>
        <div
          className=" flex justify-center items-center relative"
          style={{
            gridRow: "1 / 4",
            gridColumn: "9 / 13",
            backgroundColor: "transparent",
          }}
        >
          <div
            className="rounded h-28 w-28 relative flex justify-center items-center mr-14"
            style={{ backgroundColor: colorMap["diatomic nonmetal"] }}
          >
            <strong className="text-4xl absolute">O</strong>
            <small className="absolute top-2 right-2">15.99</small>
            <small className="absolute text-base left-2 top-2">8</small>
            <small className="absolute bottom-2">Oxygen</small>
          </div>
          <div className="absolute text-lg arrow-a-weight">
            &mdash;{" "}
            <small className="text-xs tracking-tight leading-3">
              Atomic Weight
            </small>
          </div>
          <div className="absolute text-lg arrow-symbol">
            &mdash;&mdash;&ndash;{" "}
            <small className="text-xs tracking-tight leading-3">Symbol</small>
          </div>
          <div className="absolute text-lg arrow-name">
            &mdash;&mdash;&ndash;{" "}
            <small className="text-xs tracking-tight leading-3">Name</small>
          </div>
          <div className="absolute text-lg arrow-a-number flex flex-col">
            <small className="text-xs tracking-tight leading-3">
              Atomic Number
            </small>
            |
          </div>
        </div>
        <div
          className={`flex items-center justify-center text-gray-700 dark:text-gray-100 ${
            !selectedCat || selectedCat === "lanthanide"
              ? "opacity-100"
              : "opacity-5"
          }`}
          style={{
            gridRow: "9 / 10",
            gridColumn: "1 / 3",
            backgroundColor: "",
          }}
        >
          Lanthanides*
        </div>
        <div
          className={`flex items-center justify-center text-gray-700 dark:text-gray-100 ${
            !selectedCat || selectedCat === "actinide"
              ? "opacity-100"
              : "opacity-5"
          }`}
          style={{
            gridRow: "10 / 10",
            gridColumn: "1 / 3",
            backgroundColor: "",
          }}
        >
          Actinides**
        </div>
      </div>
    </>
  );
};

export default PeriodicTable;
