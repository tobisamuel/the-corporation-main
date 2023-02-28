import { Link } from "gatsby";
import * as React from "react";

function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center pt-16 uppercase px-6 md:px-16 text-center bg-black text-white overflow-hidden">
        <hr className="w-1/5 border-gray-500" />
        <p className="text-lg font-bold tracking-wide my-3">The Corporation</p>
        <hr className="w-full border-gray-500 mb-3" />

        <Link
          to="/contacts"
          className="text-[2.5rem] md:text-9xl font-semibold block my-24 md:my-32 hover:text-gray-500">
          Get In Touch
        </Link>

        <hr className="w-full border-gray-500" />
        <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between py-10 text-xs md:text-[0.75rem]">
          <p>&copy;{new Date().getFullYear()}</p>
          <div className="flex flex-row flex-wrap space-x-2 justify-center items-center ">
            <a
              href="https://facebook.com/WeAreTCAfrica"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500">
              Facebook
            </a>
            <span>|</span>
            <a
              href="https://twitter.com/WeAreTCAfrica"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500">
              Twitter
            </a>
            <span>|</span>
            <a
              href="https://www.instagram.com/wearetcafrica/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500">
              Instagram
            </a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/company/WeAreTCAfrica/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500">
              LinkedIn
            </a>
          </div>
          <p>Site by Austere</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
