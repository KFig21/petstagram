import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImage from "./CroppingHelpers";
import "./slider.css";

export default function ImageCropper({
  selectedImage,
  handleImage,
  handleEditingCancel,
  handleEditingContinue,
  handleFinishEditingContinue,
}) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      handleEditingContinue();
      const croppedImage = await getCroppedImage(
        selectedImage,
        croppedAreaPixels
      );
      handleImage(croppedImage);
      handleFinishEditingContinue();
    } catch (e) {
      console.error(e);
    }
  }, [
    handleFinishEditingContinue,
    handleEditingContinue,
    handleImage,
    selectedImage,
    croppedAreaPixels,
  ]);

  return (
    <>
      <div
        className="border border-gray-primary mt-12"
        style={{ position: "relative", height: "65vh", width: "100vh" }}
      >
        <Cropper
          image={selectedImage}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        ></Cropper>
      </div>

      <div className="w-full mt-5 flex flex-col justify-center items-center">
        <input
          type="range"
          value={zoom}
          min={1}
          max={10}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e) => {
            setZoom(e.target.value);
          }}
          className="slider"
        />
        <span className="mt-2">Zoom</span>
      </div>

      <div className="h-16 bg-white border-t border-gray-primary absolute inset-x-0 bottom-0 justify-center">
        <div className="flex w-3/5 h-full items-center justify-around m-auto">
          <button
            className="bg-blue-primary font-bold text-sm rounded text-white w-20 h-8"
            onClick={handleEditingCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-primary font-bold text-sm rounded text-white w-20 h-8"
            onClick={showCroppedImage}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
