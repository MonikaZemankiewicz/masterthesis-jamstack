import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { Link } from "gatsby-plugin-modal-routing";
import slugify from "slugify";
const ImagesList = ({ pictures = [] }) => {
  return (
    <div className="recipes-list">
      {pictures.map((picture) => {
        const { id, title, image } = picture;
        const pathToImage = getImage(image);
        const slug = slugify(title, { lower: true });
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            ></GatsbyImage>
            <figcaption>
              <h5>{title}</h5>
            </figcaption>
          </Link>
        );
      })}
    </div>
  );
};

export default ImagesList;
