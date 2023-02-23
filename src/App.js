import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import ElementDetails from "./ElementDetails";
import ListSearch from "./ListSearch";
import ModelViewer3D from "./ModelViewer3D";
import PeriodicTable from "./PeriodicTable";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer";
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
    <div className="App font-[Roboto] flex flex-col bg-gray-400 dark:bg-gray-800 h-screen">
      <Dashboard showListSearch={showListSearch} />
      <div
        className="mx-auto max-w-full flex justify-center sm:px-0
       py-5 bg-gray-400 dark:bg-gray-800 text-gray-200"
      >
        <PeriodicTable
          showModal={showModal}
          isModal={isModal}
          showListSearch={showListSearch}
        />
        <AnimatePresence>
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
          {isModal === "Visible" && (
            <ElementDetails
              isModal={isModal}
              element={element}
              showModal={showModal}
              closeModal={closeModal}
              show3dModal={show3dModal}
              is3dModal={is3dModal}
              isListSearch={isListSearch}
            />
          )}
        </AnimatePresence>
        <ModelViewer3D
          className="z-10"
          is3dModal={is3dModal}
          close3dModal={close3dModal}
          show3dModal={show3dModal}
          element={element}
        />
        {isListSearch === "Visible" && (
          <ListSearch
            isListSearch={isListSearch}
            showListSearch={showListSearch}
            showModal={showModal}
            isModal={isModal}
          />
        )}
      </div>
      {/* <Video /> */}
      <Footer />
    </div>
  );
}

export default App;
