import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Landing Page</span> Built with
        &hearts; by GatsbyJS
      </p>
    </footer>
  );
};

export default Footer;
