import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/1.jpg"
            alt="home-page-image"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Your Business</h1>
              <h4>Example landing page</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
