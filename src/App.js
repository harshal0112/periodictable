import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import ElementDetails from "./ElementDetails2Framer";
import ListSearch from "./ListSearch";
import ModelViewer3D from "./ModelViewer3D";
import PeriodicTable from "./PeriodicTable";
// import Video from "./Video";

function App() {
  const [isModal, setIsModal] = useState("");
  const [element, setElement] = useState("");
  const showModal = (visible, element) => {
    setIsModal(visible);
    setElement(element);
  };
  const closeModal = () => {
    setIsModal("");
    document.body.style.overflowY = "auto";
  };

  const [is3dModal, setIs3dModal] = useState("closed");
  const show3dModal = (event) => {
    setIs3dModal(event);
    document.body.style.overflowY = "hidden";
  };
  const close3dModal = () => {
    setIs3dModal("closed");
  };

  const [isListSearch, setIsListSearch] = useState("");
  const showListSearch = (event) => {
    setIsListSearch(event);
  };
  return (
    <div className="App font-[Calibri]">
      <Dashboard showListSearch={showListSearch} />
      <div
        className="mx-auto max-w-full flex justify-center py-0 sm:px-0
       lg:py-6 bg-white dark:bg-gray-700 text-gray-200"
      >
        <PeriodicTable
          showModal={showModal}
          isModal={isModal}
          showListSearch={showListSearch}
        />
        <ElementDetails
          isModal={isModal}
          element={element}
          showModal={showModal}
          closeModal={closeModal}
          show3dModal={show3dModal}
          is3dModal={is3dModal}
        />
        <ModelViewer3D
          className="z-10"
          is3dModal={is3dModal}
          close3dModal={close3dModal}
          show3dModal={show3dModal}
          element={element}
        />
        <ListSearch
          isListSearch={isListSearch}
          showListSearch={showListSearch}
          showModal={showModal}
          isModal={isModal}
        />
      </div>
      {/* <Video /> */}
    </div>
  );
}

export default App;
