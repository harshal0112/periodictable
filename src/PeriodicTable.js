import React from "react";
import data from "./PeriodicTableJSON.json";
import "./PeriodicTable.css";

const colorMap = {
  "noble gas": "#cc9634",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "polyatomic nonmetal": "#189f5d",
  "alkali metal": "#8F2D56",
  "transition metal": "#495057",
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

const PeriodicTable = (props) => {
  return (
    <div className="periodic-table bg-white dark:bg-gray-600">
      {data.elements.map((element) => (
        <div
          className="element drop-shadow-2xl"
          key={element.name}
          style={{
            gridRow: element.ypos,
            gridColumn: element.xpos,
            border: "0px solid #000000",
            backgroundColor: colorMap[element.category],
            borderRadius: "5px",
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
        className="element no-element"
        style={{
          gridRow: 6,
          gridColumn: 3,
          border: "0px solid #000000",
          backgroundColor: colorMap["lanthanide"],
          borderRadius: "5px",
        }}
      >
        <strong>*</strong>
        <small className="number">57-71</small>
        <small className="name">Lanthanides</small>
      </div>
      <div
        className="element no-element"
        style={{
          gridRow: 7,
          gridColumn: 3,
          border: "0px solid #000000",
          backgroundColor: colorMap["actinide"],
          borderRadius: "5px",
        }}
      >
        <strong>**</strong>
        <small className="number">89-103</small>
        <small className="name">Actinides</small>
      </div>
      <div
        className=""
        style={{
          gridRow: "1 / 4",
          gridColumn: "3 / 6",
          backgroundColor: "transparent",
        }}
      >
        <ul className="list list1 ml-8">
          <li className="flex flex-row content-center justify-center text-gray-700 dark:text-gray-100">
            <div
              className="w-5 h-100 rounded-full"
              style={{ backgroundColor: colorMap["alkali metal"] }}
            ></div>
            <small> &nbsp; &nbsp; Alkali Metals</small>
          </li>
          <li className="flex flex-row content-center justify-center text-gray-700 dark:text-gray-100">
            <div
              className="w-5 h-100 rounded-full"
              style={{ backgroundColor: colorMap["metalloid"] }}
            ></div>
            <small> &nbsp; &nbsp; Metalloids</small>
          </li>
          <li className="flex flex-row content-center justify-center text-gray-700 dark:text-gray-100">
            <div
              className="w-5 h-100 rounded-full"
              style={{ backgroundColor: colorMap["lanthanide"] }}
            ></div>
            <small> &nbsp; &nbsp; Lanthanides</small>
          </li>
          <li className="flex flex-row content-center justify-center text-gray-700 dark:text-gray-100">
            <div
              className="w-5 h-100 rounded-full"
              style={{ backgroundColor: colorMap["post-transition metal"] }}
            ></div>
            <small> &nbsp; &nbsp; Post Transition Metals</small>
          </li>
          <li className="flex flex-row content-center justify-center text-gray-700 dark:text-gray-100">
            <div
              className="w-5 h-100 rounded-full"
              style={{ backgroundColor: colorMap["actinide"] }}
            ></div>
            <small> &nbsp; &nbsp; Actinides</small>
          </li>
          <li className="flex flex-row content-center justify-center text-gray-700 dark:text-gray-100">
            <div
              className="w-5 h-100 rounded-full"
              style={{ backgroundColor: colorMap["alkaline earth metal"] }}
            ></div>
            <small> &nbsp; &nbsp; Alkaline Earth Metals</small>
          </li>
        </ul>
      </div>
      <div
        className=""
        style={{
          gridRow: "1 / 4",
          gridColumn: "6 / 9",
          backgroundColor: "transparent",
        }}
      >
        <ul className="list list2 ml-8">
          <li className="flex flex-row content-center justify-center text-gray-700 dark:text-gray-100">
            <div
              className="w-5 h-100 rounded-full"
              style={{ backgroundColor: "orangered" }}
            ></div>
            <small> &nbsp; &nbsp; Unknown</small>
          </li>
          <li className="flex flex-row content-center justify-center text-gray-700 dark:text-gray-100">
            <div
              className="w-5 h-100 rounded-full"
              style={{ backgroundColor: colorMap["transition metal"] }}
            ></div>
            <small> &nbsp; &nbsp; Transition Metals</small>
          </li>
          <li className="flex flex-row content-center justify-center text-gray-700 dark:text-gray-100">
            <div
              className="w-5 h-100 rounded-full"
              style={{ backgroundColor: colorMap["noble gas"] }}
            ></div>
            <small> &nbsp; &nbsp; Noble Gas</small>
          </li>
          <li className="flex flex-row content-center justify-center text-gray-700 dark:text-gray-100">
            <div
              className="w-5 h-100 rounded-full"
              style={{ backgroundColor: colorMap["diatomic nonmetal"] }}
            ></div>
            <small> &nbsp; &nbsp; Diatomic NonMetal</small>
          </li>
          <li className="flex flex-row content-center justify-center text-gray-700 dark:text-gray-100">
            <div
              className="w-5 h-100 rounded-full"
              style={{ backgroundColor: colorMap["polyatomic nonmetal"] }}
            ></div>
            <small> &nbsp; &nbsp; Polyatomic NonMetal</small>
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
          <strong className="text-5xl absolute">O</strong>
          <small className="absolute top-2 right-2">15.99</small>
          <small className="absolute text-lg left-2 top-2">8</small>
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
        className="flex items-center justify-center text-gray-700 dark:text-gray-100"
        style={{
          gridRow: "9 / 10",
          gridColumn: "1 / 3",
          backgroundColor: "",
        }}
      >
        Lanthanides*
      </div>
      <div
        className="flex items-center justify-center text-gray-700 dark:text-gray-100"
        style={{
          gridRow: "10 / 10",
          gridColumn: "1 / 3",
          backgroundColor: "",
        }}
      >
        Actinides**
      </div>
    </div>
  );
};

export default PeriodicTable;
