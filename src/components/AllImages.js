import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ImagesList from "./ImagesList";

const query = graphql`
  query {
    allContentfulImage(sort: { createdAt: DESC }) {
      nodes {
        id
        title
        image {
          file {
            url
          }
        }
      }
    }
  }
`;

const AllImages = () => {
  const data = useStaticQuery(query);
  const pictures = data.allContentfulImage.nodes;
  return (
    <section className="recipes-container">
      <ImagesList pictures={pictures}></ImagesList>
    </section>
  );
};

export default AllImages;
