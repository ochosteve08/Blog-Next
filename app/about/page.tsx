import React from "react";
import Link from "next/link";

const About = () => {
  // throw  Error("Not implemented")
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1>About page</h1>
      <Link  href="/">
        Link to Home Page
      </Link>
    </div>
  );
};

export default About;
