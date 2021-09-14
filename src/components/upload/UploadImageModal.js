import React, { useState } from "react";
import ImageCropper from "./ImageCropper";
import FinalizePost from "./FinalizePost";
import loadingIcon from "../../assets/loadingIcon.png";

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
                className="w-32 text-black-light cursor-pointer mb-2"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 562.000000 533.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,533.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M2002 5295 c-86 -22 -157 -47 -200 -70 -288 -159 -573 -469 -733
-798 -47 -98 -66 -153 -100 -294 l-42 -173 -51 0 c-53 0 -253 -47 -296 -70
-58 -30 -199 -143 -244 -196 -143 -165 -215 -313 -277 -568 -77 -319 -78 -477
-4 -769 54 -218 163 -406 329 -572 96 -96 268 -219 350 -250 34 -13 45 -22 42
-34 -37 -121 -50 -205 -50 -331 0 -123 3 -147 37 -275 43 -166 90 -266 182
-388 114 -150 315 -307 482 -377 84 -35 295 -92 432 -115 107 -19 320 -19 437
0 50 8 162 34 250 57 139 37 173 42 264 42 93 0 125 -5 280 -46 227 -59 321
-72 506 -66 119 4 178 12 293 37 152 35 283 77 366 118 157 79 352 250 453
396 74 107 108 186 150 344 32 125 35 151 36 273 0 113 -4 152 -26 240 -18 69
-23 106 -16 109 121 43 322 191 433 317 158 181 227 312 287 546 41 161 42
165 42 338 0 166 -2 183 -37 336 -73 316 -124 428 -285 627 -58 72 -190 178
-258 208 -59 27 -241 69 -295 69 l-47 0 -21 98 c-42 185 -62 248 -117 362
-102 213 -200 348 -388 535 -206 204 -350 292 -566 345 -76 18 -151 30 -192
30 -100 0 -272 -43 -349 -88 -61 -36 -199 -161 -233 -212 l-17 -25 -21 30
c-40 57 -164 170 -227 207 -80 46 -249 88 -354 88 -48 -1 -116 -12 -205 -35z
m334 -406 c131 -63 225 -255 269 -546 25 -171 39 -482 26 -605 -12 -112 -45
-244 -83 -326 -37 -83 -126 -208 -186 -264 -355 -328 -847 -116 -992 427 -26
100 -37 295 -21 386 49 281 268 623 521 811 182 135 344 176 466 117z m1153
16 c237 -56 524 -330 681 -650 90 -184 105 -248 105 -435 0 -130 -4 -169 -23
-239 -77 -285 -243 -488 -460 -563 -93 -32 -240 -31 -327 2 -261 100 -439 370
-476 718 -13 123 1 434 26 605 56 372 187 569 385 576 14 0 54 -6 89 -14z
m-2464 -1395 c153 -71 320 -273 461 -555 72 -146 94 -226 94 -353 0 -198 -69
-377 -193 -504 -94 -95 -196 -138 -327 -138 -277 1 -525 204 -610 500 -28 98
-37 296 -20 422 37 277 165 531 308 616 99 57 182 61 287 12z m3821 6 c130
-60 240 -223 308 -457 36 -127 50 -251 43 -397 -7 -155 -23 -216 -89 -352 -64
-130 -137 -207 -255 -268 -107 -55 -187 -75 -308 -76 -159 0 -250 37 -332 136
-59 73 -102 150 -137 245 -30 84 -31 95 -31 243 0 175 6 202 81 352 166 333
363 551 537 594 64 16 116 10 183 -20z m-1896 -596 c264 -42 503 -206 635
-434 28 -47 72 -124 99 -171 74 -127 173 -235 316 -344 251 -192 371 -346 446
-571 25 -77 28 -99 29 -225 0 -129 -2 -146 -28 -220 -90 -255 -314 -440 -617
-509 -238 -55 -483 -36 -790 61 -76 23 -101 26 -230 26 -129 0 -154 -3 -230
-26 -339 -107 -613 -119 -865 -40 -270 85 -461 256 -541 484 -38 107 -44 270
-15 392 51 213 171 392 383 568 188 157 360 356 474 549 147 247 368 407 634
456 83 15 216 17 300 4z"
                  />
                  <path
                    d="M2726 2319 c-20 -17 -40 -47 -46 -67 -5 -20 -10 -128 -10 -239 l0
-203 -216 0 c-226 0 -237 -2 -286 -48 -24 -22 -28 -33 -28 -84 0 -38 6 -68 16
-84 33 -50 55 -54 294 -54 l220 0 0 -207 c0 -115 5 -225 10 -245 6 -20 24 -48
41 -62 41 -35 132 -37 174 -4 50 39 55 68 55 298 l0 210 198 0 c212 0 255 7
302 46 28 24 30 30 30 92 0 75 -13 99 -67 126 -26 13 -69 16 -248 16 l-215 0
0 210 c0 155 -4 219 -14 243 -37 89 -142 116 -210 56z"
                  />
                </g>
              </svg>
            </div>
            <input
              style={{ display: "none" }}
              type="file"
              name="file"
              accept="image/*"
              onChange={initialUploadHandler}
            />
            <div className="flex items-end justify-evenly bg-none font-semibold cursor-pointer outline-none p-4 text-center">
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
      <img
        className="absolute w-48"
        src={loadingIcon}
        style={{ zIndex: "1" }}
        alt="loading..."
      />
    </div>
  );
}
