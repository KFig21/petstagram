import React, { useState } from "react";
import ImageCropper from "./ImageCropper";
import FinalizePost from "./FinalizePost";

export default function UploadImageModal({ type }) {
  const [selectedImage, setSelectedImage] = useState("");
  const [imageSelectionStatus, setImageSelectionStatus] = useState(false);
  const [editingImage, setEditingImage] = useState(false);
  const [finishedEditing, setFinishedEditing] = useState(false);
  const [fileName, setFileName] = useState("");

  const initialUploadHandler = (e) => {
    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);
    setFileName(file.name);
    setSelectedImage(fileURL);
    setEditingImage(!editingImage);
    setImageSelectionStatus(!imageSelectionStatus);
  };

  const handleImage = (newImage) => {
    setSelectedImage(newImage);
  };

  const handleEditingCancel = () => {
    setEditingImage(!editingImage);
    setImageSelectionStatus(!imageSelectionStatus);
  };

  const handleEditingContinue = () => {
    setEditingImage(!editingImage);
  };

  const handleFinishEditingCancel = () => {
    setFinishedEditing(!finishedEditing);
    setEditingImage(!editingImage);
  };

  const handleFinishEditingContinue = () => {
    setFinishedEditing(!finishedEditing);
  };

  return (
    <div className="flex items-center justify-center w-full">
      {!imageSelectionStatus && !editingImage && !finishedEditing && (
        <div
          className="p-24 shadow-lg bg-white outline-none"
          style={{ zIndex: "5" }}
        >
          <label>
            <div className="flex items-center justify-center ">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 490.2 490.2"
                className="w-24 text-black-light cursor-pointer"
              >
                <path
                  d="M418.5,418.5c95.6-95.6,95.6-251.2,0-346.8s-251.2-95.6-346.8,0s-95.6,251.2,0,346.8S322.9,514.1,418.5,418.5z M89,89
                 c86.1-86.1,226.1-86.1,312.2,0s86.1,226.1,0,312.2s-226.1,86.1-312.2,0S3,175.1,89,89z"
                />
                <path
                  d="M245.1,336.9c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7v-67.3h67.3c3.4,0,6.4-1.4,8.7-3.6c2.2-2.2,3.6-5.3,3.6-8.7
                 c0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2c-6.8,0-12.3,5.5-12.2,12.2v67.3h-67.3c-6.8,0-12.3,5.5-12.2,12.2
                 c0,6.8,5.5,12.3,12.2,12.2h67.3v67.3C232.8,331.4,238.3,336.9,245.1,336.9z"
                />
              </svg>
            </div>
            <input
              style={{ display: "none" }}
              type="file"
              name="file"
              accept="image/*"
              onChange={initialUploadHandler}
            />
            <div className="flex items-end justify-evenly bg-none font-semibold cursor-pointer outline-none p-4">
              Choose image to upload
            </div>
          </label>
        </div>
      )}
      {selectedImage &&
        !finishedEditing &&
        editingImage &&
        imageSelectionStatus && (
          <div style={{ zIndex: "5" }}>
            <ImageCropper
              selectedImage={selectedImage}
              handleImage={handleImage}
              handleEditingCancel={handleEditingCancel}
              handleEditingContinue={handleEditingContinue}
              handleFinishEditingContinue={handleFinishEditingContinue}
            />
          </div>
        )}
      {finishedEditing && imageSelectionStatus && (
        <div style={{ zIndex: "5" }}>
          <FinalizePost
            selectedImage={selectedImage}
            handleFinishEditingCancel={handleFinishEditingCancel}
            fileName={fileName}
            type={type}
          />
        </div>
      )}
      <p className="absolute" style={{ zIndex: "1" }}>
        loading... (possibly)
      </p>
    </div>
  );
}
