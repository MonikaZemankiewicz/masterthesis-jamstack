import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { Link } from "gatsby-plugin-modal-routing";

const ImagesList = ({ pictures = [] }) => {
  return (
    <div className="recipes-list">
      {pictures.map((picture) => {
        const { id, title, image } = picture;
        const pathToImage = getImage(image);
        return (
          <Link
            key={id}
            to={`/${title}`}
            // state={{
            //   modal: true,
            // }}
            className="recipe"
          >
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            ></GatsbyImage>
            <h5>{title}</h5>
          </Link>
        );
      })}
    </div>
  );
};

export default ImagesList;
