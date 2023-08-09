import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <h1 className="flex flex-col items-center justify-between p-24">
        About page
      </h1>
      <Link className="text-center" href="/">
        Link to Home Page
      </Link>
    </>
  );
};

export default About;
