import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import "@google/model-viewer";
import "./PeriodicTable.css";

function ModelViewer3D(props) {
  return (
    <div>
      <div
        className={`relative z-50 ${
          props.is3dModal === "Visible" ? "" : "hidden"
        } model-3d`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 z-50 h-full overflow-y-hidden backdrop-brightness-50 flex items-center justify-center"
          onClick={props.close3dModal}
        >
          <div className="absolute flex w-full max-w-lg h-full justify-center m-10 text-center items-center p-2">
            <div
              className="relative rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: "#808080",
                width: "700px",
                height: "550px",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {props.element.bohr_model_3d ? (
                props.is3dModal === "Visible" ? (
                  <model-viewer
                    src={props.element.bohr_model_3d}
                    loading="eager"
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    camera-controls
                    auto-rotate
                    poster="https://www.linkpicture.com/q/newG.gif"
                    shadow-intensity="2"
                    scale="1.75 1.75 1.75"
                    autoplay
                    style={{ height: "100%", width: "100%" }}
                  >
                    {" "}
                  </model-viewer>
                ) : (
                  <div>Loading...</div>
                )
              ) : (
                <div>
                  Bohr 3D Model Not Available for this Element to Preview
                </div>
              )}
              <button
                className="absolute left-3 top-5 text-xl p-1 text-white  hover:bg-gray-400 rounded-md hover:text-gray-700 transform active:scale-75 transition-transform"
                title="Back"
                onClick={props.close3dModal}
              >
                <h1>
                  <HiArrowLeft />
                </h1>
              </button>
              <div className="absolute bottom-5 left-3 text-gray-300">
                <h1>{props.element.name}</h1>
              </div>
              <div className="absolute top-5 right-3">
                {props.element.shells && (
                  <h1 className="text-[12px]">
                    [{props.element.shells.join(", ")}]
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelViewer3D;
