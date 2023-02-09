import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Stage,
  PresentationControls,
  useProgress,
  Html,
  useAnimations,
} from "@react-three/drei";
import { HiArrowLeft } from "react-icons/hi";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Model(props) {
  const group = useRef();
  let { scene, animations } = useLoader(
    GLTFLoader,
    props.element.bohr_model_3d
  );
  let animGroup = useAnimations(animations, group);
  console.log(animations);
  console.log(animGroup);
  console.log(scene);
  let { actions } = useAnimations(animations, group);
  console.log(actions);
  useEffect(() => {
    actions["ArmatureAction.0" + props.element.number.toString()].play();
  }, [actions, props.element.bohr_model_3d]);

  return <primitive ref={group} object={scene} {...props} dispose={null} />;
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
              className="relative rounded-lg flex flex-col items-center justify-center"
              style={{ backgroundColor: "#111827", height: "520px" }}
            >
              <button
                className="absolute left-3 top-2 text-2xl text-gray-300"
                onClick={props.close3dModal}
              >
                <h1>
                  <HiArrowLeft />
                </h1>
              </button>
              <Canvas
                dpr={[1, 2]}
                shadows
                camera={{ position: [0, 2, 4], fov: 1 }}
                style={{
                  position: "relative",
                  width: "500px",
                  height: "450px",
                }}
                className=""
              >
                <Suspense fallback={<Loader />}>
                  <color attach="background" args={["#111827"]} />
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
                </Suspense>
              </Canvas>
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
