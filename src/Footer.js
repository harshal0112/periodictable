import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className=" p-4 dark:bg-gray-700 bg-gray-500">
        <div className="flex items-center justify-between">
          <span className="text-sm sm:text-center dark:text-gray-200 text-gray-800">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Harshal
            </a>
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/harshal0112"
              target={"_blank"}
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://twitter.com/iam__Harshal"
              target={"_blank"}
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="/"
              rel="noreferrer"
              target={"_blank"}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="/"
              rel="noreferrer"
              target={"_blank"}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebook />
              <span className="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
