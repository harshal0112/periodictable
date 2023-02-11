import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import ElementDetails from "./ElementDetails2";
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
  return (
    <div className="App">
      <Dashboard />
      <div
        className="mx-auto max-w-full flex justify-center py-0 sm:px-0
       lg:py-6 bg-white dark:bg-gray-600 text-gray-200"
      >
        <PeriodicTable showModal={showModal} isModal={isModal} />
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
      </div>
      {/* <Video /> */}
    </div>
  );
}

export default App;
