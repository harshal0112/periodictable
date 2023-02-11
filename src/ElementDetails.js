import React from "react";
import { FaReact, FaFlask, FaAtom } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import dataX from "./PeriodicTableJSON.json";

function ElementDetails(props) {
  return (
    <div>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 bottom-0 flex justify-center ${
          props.isModal === "Visible" ? "" : "hidden"
        } w-full p-0 overflow-x-hidden ${
          props.is3dModal === "Visible"
            ? "overflow-y-hidden"
            : "overflow-y-auto"
        } md:inset-0 h-modal md:h-full backdrop-brightness-50 z-10 pt-10`}
        onClick={props.closeModal}
      >
        <div
          className={`absolute z-50 w-full h-full max-w-lg md:h-auto ${
            props.isModal === "Visible" ? "pop-up" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative bg-white divide-y divide-slate-700 tracking-wide shadow dark:bg-gray-900 rounded">
            <div className="relative">
              <div
                className={`flex justify-center items-center overflow-hidden h-64 rounded-t`}
              >
                {props.element.image && (
                  <img
                    className="w-full h-72 brightness-50"
                    src={props.element.image.url}
                    alt={props.element.name}
                    style={{ width: "100%" }}
                  />
                )}
                <button
                  className="absolute left-3 top-2 text-2xl text-gray-200 hover:bg-gray-400 rounded-md hover:text-gray-700 transform active:scale-75 transition-transform"
                  onClick={props.closeModal}
                >
                  <h1>
                    <HiArrowLeft />
                  </h1>
                </button>
                <div className="absolute bottom-8 left-3 text-gray-200">
                  <h1 className="text-5xl">{props.element.symbol}</h1>
                </div>
                <button
                  className="absolute bottom-2 right-3 text-gray-200 rounded-full pl-3 pr-3 p-1 bg-gray-800 shadow-black shadow hover:scale-105 text-sm transform active:scale-90 transition-transform duration-75"
                  onClick={() => props.show3dModal("Visible")}
                >
                  Bohr's 3D Model
                </button>
              </div>
            </div>
            <div className="p-3 flex text-gray-300 items-center justify-center divide-x divide-slate-600">
              <div className="flex justify-center w-1/2 cursor-pointer hover:text-gray-100 relative items-center">
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
                        dataX.elements[Number(props.element.number) - 2].name
                      : "*"}
                  </small>
                )}
                <div className="absolute left-2">&#10094;</div>
              </div>
              <div className="flex justify-center w-1/2 cursor-pointer hover:text-gray-100 relative items-center">
                {dataX.elements[
                  Number(props.element.number) < 119
                    ? Number(props.element.number)
                    : 118
                ] && (
                  <small>
                    {props.element.number < 119
                      ? dataX.elements[Number(props.element.number)].number +
                        " - " +
                        dataX.elements[Number(props.element.number)].name
                      : "*"}
                  </small>
                )}
                <div className="absolute right-2">&#10095;</div>
              </div>
            </div>
            <div className="p-3 flex items-center bg-zinc-600 text-gray-300 text-start">
              <FaReact />
              &nbsp; Overview
            </div>
            <div className="flex items-start flex-col p-3">
              <small className="text-gray-500 text-start">Summary:</small>
              <small className="text-start leading-relaxed text-gray-400 dark:text-gray-300">
                {props.element.summary}
              </small>
            </div>
            <div className="flex items-start flex-col p-3">
              <small className="text-gray-500 text-start">Discovered By:</small>
              <small className=" leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                {props.element.discovered_by
                  ? props.element.discovered_by
                  : "----------"}
              </small>
            </div>
            <div className="flex items-start flex-col p-3">
              <small className="text-gray-500 text-start">Named By:</small>
              <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                {props.element.named_by
                  ? props.element.named_by
                  : "-----------"}
              </small>
            </div>
            <div className="flex items-start p-3 flex-col">
              <small className="text-gray-500 text-start">Appearance:</small>
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
            <div className="p-3 flex items-center bg-zinc-600 text-gray-300 text-start">
              <FaFlask />
              &nbsp; Properties
            </div>
            <div className="flex items-start p-3 flex-col">
              <small className="text-gray-500 text-start">Atomic Number:</small>
              <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                {props.element.number}
              </small>
            </div>
            <div className="flex items-start p-3 flex-col">
              <small className="text-gray-500 text-start">Atomic Mass:</small>
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
              <small className="text-gray-500 text-start">Density:</small>
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
              <small className="text-gray-500 text-start">Melting Point:</small>
              <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                {props.element.melt}
              </small>
            </div>
            <div className="flex items-start p-3 flex-col">
              <small className="text-gray-500 text-start">Boiling Point:</small>
              <small className="leading-relaxed text-gray-400 dark:text-gray-300 text-start">
                {props.element.boil}
              </small>
            </div>
            <div className="flex items-start p-3 flex-col">
              <small className="text-gray-500 text-start">Molar Heat:</small>
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
              <small className="text-gray-500 text-start">Period:</small>
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
                  className="hover:underline hover:text-blue-200"
                  href={props.element.spectral_img}
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.element.spectral_img}
                </a>
              </small>
            </div>
            <div className="p-3 flex items-center bg-zinc-600 text-gray-300 text-start">
              <FaAtom />
              &nbsp; Reactivity
            </div>
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
      </div>
    </div>
  );
}

export default ElementDetails;
