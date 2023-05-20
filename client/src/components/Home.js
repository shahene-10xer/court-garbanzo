import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="hero"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Using AI to create an equitable society</h1>
      <h2>What can we help you with?</h2>
      <div className="categoryGrid">
        <CategoryButton title="Family" link="form/family" />
        <CategoryButton title="Civil" link="form/civil" />
        <CategoryButton title="Small Claims" link="form/small-claims" />
      </div>
    </div>
  );
}

function CategoryButton({ title, link }) {
  return (
    <Link to={link}>
      <div className="categoryButton" variant="contained" color="primary">
        {title}
      </div>
    </Link>
  );
}

export default Home;
