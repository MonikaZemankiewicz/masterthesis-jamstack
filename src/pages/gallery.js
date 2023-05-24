import React from "react";
import Layout from "../components/Layout";
import AllImages from "../components/AllImages";

const Gallery = () => {
  return (
    <Layout>
      <main className="page">
        <AllImages></AllImages>
      </main>
    </Layout>
  );
};

export default Gallery;
