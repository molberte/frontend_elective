import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const KseniyaCrushPage = ({ crushesOwnerName }) => {
  return (
    <div>
      <h3>{crushesOwnerName}</h3>
      <Gallery photos={photos} />
    </div>
  );
};
export default KseniyaCrushPage;