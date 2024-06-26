import React from "react";
import "./imageList.css";
import ImageCard from "./ImageCard";
const ImageLIst = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}></ImageCard>;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageLIst;
