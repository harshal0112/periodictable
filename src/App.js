import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import ElementDetails from "./ElementDetails";
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
  };
  return (
    <div className="App">
      <Dashboard />
      <div className="mx-auto max-w-full flex justify-center py-6 sm:px-6 lg:px-8 bg-white dark:bg-gray-600 text-gray-100">
        <PeriodicTable showModal={showModal} />
        <ElementDetails
          isModal={isModal}
          element={element}
          showModal={showModal}
          closeModal={closeModal}
        />
      </div>
      {/* <Video /> */}
    </div>
  );
}

export default App;
