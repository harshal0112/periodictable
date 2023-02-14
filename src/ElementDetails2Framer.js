import React from "react";
import { FaReact, FaWikipediaW } from "react-icons/fa";
import { GiFizzingFlask, GiChemicalDrop } from "react-icons/gi";
import { HiArrowLeft, HiOutlineChevronDown } from "react-icons/hi";
import dataX from "./PeriodicTableJSON.json";
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

function ElementDetails(props) {
  return (
    <div>
      {/* <!-- Main modal --> */}
      {props.isModal === "Visible" && (
        <motion.div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className={`fixed top-0 left-0 right-0 bottom-0 flex justify-center w-full overflow-x-hidden ${
            props.is3dModal === "Visible"
              ? "overflow-y-hidden"
              : "overflow-y-auto"
          } md:inset-0 h-modal md:h-full backdrop-brightness-50 z-10`}
          onClick={props.closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.5 }}
        >
          <div className={`absolute z-50 h-full px-2 max-w-lg md:h-auto`}>
            {props.isModal === "Visible" && (
              <motion.div
                className="relative bg-white divide-y divide-slate-600 tracking-wide shadow dark:bg-gray-900 rounded-[2px]"
                onClick={(e) => e.stopPropagation()}
                initial={{ y: 500 }}
                animate={{ y: 70 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <div className="relative">
                  <div
                    className={`flex justify-center items-center overflow-hidden h-64 rounded-t-[2px]`}
                  >
                    {props.element.image && (
                      <img
                        className="h-72 brightness-50"
                        src={props.element.image.url}
                        alt={props.element.name}
                        style={{ width: "100%" }}
                      />
                    )}
                    <button
                      className="absolute left-3 top-5 text-xl text-gray-200 p-1 hover:bg-gray-400 rounded-md hover:text-gray-700 transform active:scale-75 transition-transform"
                      title="Back"
                      onClick={props.closeModal}
                    >
                      <h1>
                        <HiArrowLeft />
                      </h1>
                    </button>
                    <a
                      href={props.element.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        className="absolute top-5 right-4 text-xl"
                        title="Wikipedia"
                      >
                        <h1>
                          <FaWikipediaW />
                        </h1>
                      </button>
                    </a>
                    <div className="absolute bottom-8 left-3 text-gray-200 flex">
                      <div className="mr-5">
                        <h1 className="text-5xl">{props.element.symbol}</h1>
                      </div>
                      <div className="flex flex-col justify-center text-start">
                        <h1 className="text-lg">{props.element.name}</h1>
                        <div className="text-opacity-70 text-gray-200">
                          <h1 className="text-xs">
                            {props.element.atomic_mass}(g/mol)
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute flex items-center bottom-24 left-0 px-2 py-0 divide-x text-[10px] h-[30px] text-gray-100 rounded-r-[1px]"
                      style={{
                        backgroundColor: colorMap[props.element.category],
                      }}
                    >
                      <h1 className="">{props.element.number} &nbsp; </h1>
                      <h1>
                        {" "}
                        &nbsp;{" "}
                        {props.element.category
                          ? props.element.category
                              .replace("unknown,", "")
                              .toUpperCase()
                          : ""}
                      </h1>
                    </div>
                    <button
                      className="absolute bottom-8 right-3 text-gray-200 rounded-full pl-3 pr-3 p-1 bg-gray-600 shadow-black shadow-md hover:scale-105 text-sm transform active:scale-90 transition-transform duration-75"
                      title="Bohr's 3D Model"
                      onClick={() => props.show3dModal("Visible")}
                    >
                      3D
                    </button>
                  </div>
                </div>
                <div className="p-3 flex text-gray-300 items-center justify-center divide-x divide-slate-600">
                  <div
                    className={`flex justify-center w-1/2 cursor-pointer hover:text-gray-100 relative items-center ${
                      props.element.number === 1
                        ? "pointer-events-none text-zinc-500"
                        : ""
                    }`}
                    onClick={() =>
                      props.showModal(
                        "Visible",
                        dataX.elements[
                          Number(props.element.number) - 2 > 0
                            ? Number(props.element.number) - 2
                            : 0
                        ]
                      )
                    }
                  >
                    {dataX.elements[
                      Number(props.element.number) < 119
                        ? Number(props.element.number)
                        : 118
                    ] && (
                      <small>
                        {props.element.number >= 2
                          ? dataX.elements[Number(props.element.number) - 2]
                              .number +
                            " - " +
                            dataX.elements[Number(props.element.number) - 2]
                              .name
                          : "*"}
                      </small>
                    )}
                    <div className="absolute left-2">&#10094;</div>
                  </div>
                  <div
                    className={`flex justify-center w-1/2 cursor-pointer hover:text-gray-100 relative items-center ${
                      props.element.number === 119
                        ? "pointer-events-none text-zinc-500"
                        : ""
                    }`}
                    onClick={() =>
                      props.showModal(
                        "Visible",
                        dataX.elements[
                          Number(props.element.number) < 118
                            ? Number(props.element.number)
                            : 118
                        ]
                      )
                    }
                  >
                    {dataX.elements[
                      Number(props.element.number) < 119
                        ? Number(props.element.number)
                        : 118
                    ] && (
                      <small>
                        {props.element.number < 119
                          ? dataX.elements[Number(props.element.number)]
                              .number +
                            " - " +
                            dataX.elements[Number(props.element.number)].name
                          : "*"}
                      </small>
                    )}
                    <div className="absolute right-2">&#10095;</div>
                  </div>
                </div>
                <div className="bg-gray-900 text-gray-300 text-start relative">
                  <input
                    type="checkbox"
                    defaultChecked="true"
                    className="peer inset-x-0 absolute w-full h-12 opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center bg-gray-700 h-12 pl-3">
                    <div className="">
                      <FaReact />
                    </div>
                    <div className="">&nbsp; Overview</div>
                  </div>
                  <div className="absolute transition-transform rotate-0 peer-checked:rotate-180 right-4 top-4">
                    <HiOutlineChevronDown />
                  </div>
                  <div className="max-h-0 overflow-hidden peer-checked:max-h-max bg-gray-900 transition-all duration-500 divide-y divide-gray-700">
                    <div className="flex items-start flex-col p-3">
                      <small className="text-gray-500 text-start">
                        Summary:
                      </small>
                      <small className="text-start leading-relaxed text-gray-400 dark:text-gray-300">
                        {props.element.summary}
                      </small>
                    </div>
                    <div className="flex items-start flex-col p-3">
                      <small className="text-gray-500 text-start">
                        Discovered By:
                      </small>
                      <small className=" leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.discovered_by
                          ? props.element.discovered_by
                          : "----------"}
                      </small>
                    </div>
                    <div className="flex items-start flex-col p-3">
                      <small className="text-gray-500 text-start">
                        Named By:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.named_by
                          ? props.element.named_by
                          : "-----------"}
                      </small>
                    </div>
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">
                        Appearance:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.appearance}
                      </small>
                    </div>
                    <div className="flex flex-col items-start p-3">
                      <small className="text-gray-500 text-start">
                        Electronic Shells:
                      </small>
                      {props.element.shells && (
                        <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                          {props.element.shells.join(", ")}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 text-gray-300 text-start relative">
                  <input
                    type="checkbox"
                    className="peer inset-x-0 absolute w-full h-12 opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center bg-gray-700 h-12 pl-3">
                    <div className="">
                      <GiFizzingFlask />
                    </div>
                    <div className="">&nbsp; Properties</div>
                  </div>
                  <div className="absolute transition-transform rotate-0 peer-checked:rotate-180 right-4 top-4">
                    <HiOutlineChevronDown />
                  </div>
                  <div className="max-h-0 overflow-hidden peer-checked:max-h-max bg-gray-900 transition-all duration-500 divide-y divide-gray-700">
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">
                        Atomic Number:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.number}
                      </small>
                    </div>
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">
                        Atomic Mass:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.atomic_mass}
                      </small>
                    </div>
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">
                        Electron Configuration:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.electron_configuration}
                      </small>
                    </div>
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">
                        Density:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.density}
                      </small>
                    </div>
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">Phase:</small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.phase}
                      </small>
                    </div>
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">
                        Melting Point:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.melt}
                      </small>
                    </div>
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">
                        Boiling Point:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.boil}
                      </small>
                    </div>
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">
                        Molar Heat:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.molar_heat}
                      </small>
                    </div>
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">Group:</small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.group}
                      </small>
                    </div>
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">
                        Period:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.period}
                      </small>
                    </div>
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">
                        Emission Spectrum:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        <a
                          className="hover:underline text-cyan-500 hover:text-blue-500"
                          href={props.element.spectral_img}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {props.element.spectral_img}
                        </a>
                      </small>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 text-gray-300 text-start relative">
                  <input
                    type="checkbox"
                    className="peer inset-x-0 absolute w-full h-12 opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center bg-gray-700 h-12 pl-3">
                    <div className="">
                      <GiChemicalDrop />
                    </div>
                    <div className="">&nbsp; Reactivity</div>
                  </div>
                  <div className="absolute transition-transform rotate-0 peer-checked:rotate-180 right-4 top-4">
                    <HiOutlineChevronDown />
                  </div>
                  <div className="max-h-0 overflow-hidden peer-checked:max-h-max bg-gray-900 transition-all duration-500 divide-y divide-gray-700">
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">
                        ElectroNegativity Pauling:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.electronegativity_pauling}
                      </small>
                    </div>
                    <div className="flex items-start p-3 flex-col">
                      <small className="text-gray-500 text-start">
                        Electron Affinity:
                      </small>
                      <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                        {props.element.electron_affinity}
                      </small>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default ElementDetails;
