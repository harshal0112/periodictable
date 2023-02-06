import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { HiArrowLeft } from "react-icons/hi";

function Model(props) {
  const { scene } = useGLTF(props.element.bohr_model_3d);
  return <primitive object={scene} {...props} />;
}

function ModelViewer3D(props) {
  return (
    <div>
      <div
        className={`relative z-50 ${
          props.is3dModal === "Visible" ? "" : "hidden"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity Entering:ease-out duration-300
      From:opacity-0
      To:opacity-100
    Leaving:ease-in duration-200
      From:opacity-100
      To:opacity-0"
        ></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center m-10 text-center sm:items-center sm:p-0">
            <div
              className="relative rounded-lg"
              style={{ backgroundColor: "#808080" }}
            >
              <Canvas
                dpr={[1, 2]}
                shadows
                camera={{ fov: 1 }}
                style={{
                  position: "relative",
                  width: "500px",
                  height: "450px",
                }}
                className="rounded"
              >
                <color attach="background" args={["#808080"]} />
                <ambientLight intensity={0.5} />
                <PresentationControls
                  speed={1.5}
                  global
                  zoom={0.9}
                  polar={[-0.1, Math.PI / 4]}
                >
                  <Stage environment={null}>
                    <Model scale={0.01} element={props.element} />
                  </Stage>
                </PresentationControls>
              </Canvas>
              <button
                className="absolute left-3 top-2 text-2xl text-gray-300"
                onClick={props.close3dModal}
              >
                <h1>
                  <HiArrowLeft />
                </h1>
              </button>
              <div className="absolute bottom-2 right-5 text-gray-300">
                <h1>{props.element.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ModelViewer3D, Model };
