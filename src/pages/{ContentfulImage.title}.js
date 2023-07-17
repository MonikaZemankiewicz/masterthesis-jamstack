import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { graphql } from "gatsby";

const ImageTemplate = ({ data }) => {
  const { title, image } = data.contentfulImage;
  const pathToImage = getImage(image);
  return (
    <div>
      <GatsbyImage image={pathToImage} alt={title}></GatsbyImage>
    </div>
  );
};

export const query = graphql`
  query getSingleImage($title: String) {
    contentfulImage(title: { eq: $title }) {
      title
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`;

export default ImageTemplate;
