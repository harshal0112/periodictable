import React from "react";
import { FaReact, FaFlask, FaAtom } from "react-icons/fa";
import dataX from "./PeriodicTableJSON.json";

function ElementDetails(props) {
  return (
    <div>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center ${
          props.isModal === "Visible" ? "" : "hidden"
        } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full backdrop-brightness-50`}
      >
        <div
          className={`relative w-full h-full max-w-lg md:h-auto ${
            props.isModal === "Visible" ? "pop-up" : ""
          }`}
        >
          {/* // <!-- Modal content --> */}
          <div className="relative bg-white divide-y divide-slate-700 tracking-wide rounded shadow dark:bg-gray-900">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {props.element.name}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={props.closeModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* // <!-- Modal body --> */}
            <div className="space-y-6">
              <div
                className={`flex justify-center items-center overflow-hidden h-64`}
              >
                {props.element.image && (
                  <img
                    className="w-full h-72"
                    src={props.element.image.url}
                    alt={props.element.name}
                    style={{ width: "100%" }}
                  />
                )}
              </div>
            </div>
            <div className="p-3 flex text-gray-300 items-center justify-center divide-x divide-slate-600">
              <div className="flex justify-center w-1/2 cursor-pointer hover:text-gray-100">
                {dataX.elements[Number(props.element.number)] && (
                  <small>
                    Prev {dataX.elements[Number(props.element.number) - 2].name}
                  </small>
                )}
              </div>
              <div className="flex justify-center w-1/2 cursor-pointer hover:text-gray-100">
                <small>Next</small>
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
