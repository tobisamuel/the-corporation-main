import * as React from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { globalHistory } from "@reach/router";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Link } from "gatsby";
import { useState } from "react";

const modalVariants = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      ease: [0.36, 0.66, 0.04, 1],
    },
  },
  hidden: {
    transition: {
      when: "afterChildren",
    },
  },
  exit: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

const squareVariants = {
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.4,
      ease: [0.36, 0.66, 0.04, 1],
      staggerChildren: 0.05,
    },
  },
  hidden: { scaleY: 0 },
  exit: {
    scaleY: 0,
    transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
  },
};

const textVariants = {
  visible: {
    opacity: 1,
    // x: "0%",
    y: 0,
    transition: { duration: 0.05, ease: [0.36, 0.66, 0.04, 1] },
  },
  hidden: {
    y: -100,
    // x: "-100%",
    opacity: 0,
  },
  exit: {
    // x: "-100%",
    y: -100,
    opacity: 0,
  },
};

const textInvertedVariants = {
  visible: {
    opacity: 1,
    // x: "0%",
    y: 0,
    transition: { duration: 0.01, ease: [0.36, 0.66, 0.04, 1] },
  },
  hidden: {
    y: -100,
    // x: "-100%",
    opacity: 0,
  },
  exit: {
    // x: "-100%",
    y: -100,
    opacity: 0,
  },
};

const NavLink = motion(Link);

function Square({ shouldShow }) {
  const controls = useAnimation();
  React.useEffect(() => {
    if (shouldShow) {
      controls.start("visible");
    }
  }, [shouldShow]);
  return (
    <motion.div
      whileInView={true}
      style={{ originY: "top" }}
      variants={squareVariants}
      className="bg-black h-full w-full"></motion.div>
  );
}

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isStaffOpen, setStaffOpen] = useState(false);

  // const toggle = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  React.useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") setMenuOpen(false);
      if (action === "PUSH") setStaffOpen(false);
    });
  }, [setMenuOpen, setStaffOpen]);

  return (
    <>
      <nav className="sticky top-0 left-0 z-[900] flex items-center w-full px-6 md:px-16 py-4 md:py-8 bg-white">
        <div className="flex justify-between items-center w-full uppercase text-sm tracking-wide">
          <button
            onClick={() => setMenuOpen(true)}
            className="font-semibold text-[0.75rem] hover:text-gray-900 inline-flex flex-col uppercase items-start">
            <span>menu</span>
            <svg viewBox="0 0 86.1 10.72" className="w-16 h-auto">
              <rect width="86.1" height="1.85" />
              <rect y="8.87" width="41.35" height="1.85" />
            </svg>
          </button>

          <NavLink to="/">
            <svg className="w-20 h-20" viewBox="0 0 2031.48 1304.66">
              <polygon points="207.01 1005.78 445.33 1005.78 445.33 483.71 652.34 483.71 652.34 298.91 0 298.91 0 483.71 207.01 483.71 207.01 1005.78" />
              <path d="M1714.4,1022.43c138.35,0,247.41-50.49,317.08-141.37L1881,746.75c-41.4,52.52-90.88,82.81-154.5,82.81-99,0-165.61-68.67-165.61-176.72s66.65-176.72,165.61-176.72c63.62,0,113.1,30.3,154.5,82.81l150.46-134.31c-69.67-90.88-178.73-141.37-317.08-141.37-227.21,0-393.83,152.48-393.83,369.59s166.62,369.59,393.83,369.59Z" />
              <polygon
                points="975.29 0 1037.01 0 1037.01 1304.66 975.29 1304.66 975.29 0"
                fillRule="evenodd"
              />
            </svg>
          </NavLink>

          <button
            onClick={() => setStaffOpen(true)}
            className="font-semibold text-[0.75rem] hover:text-gray-900 inline-flex flex-col uppercase items-end">
            <span>staff</span>
            <svg viewBox="0 0 86.1 10.72" className="w-16 h-auto">
              <rect width="86.1" height="1.85" />
              <rect x="44.75" y="8.87" width="41.35" height="1.85" />
            </svg>
          </button>
        </div>
      </nav>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      <AnimatePresence>
        {isMenuOpen && (
          <Dialog
            // static
            appear="show"
            as={motion.div}
            className="relative z-[990]"
            open={true}
            initial="hidden"
            animate="visible"
            variants={modalVariants}
            onClose={() => setMenuOpen(false)}>
            <div className="fixed inset-0 overflow-hidden grid grid-cols-6 h-full">
              <Square shouldShow={isMenuOpen} />
              <Square shouldShow={isMenuOpen} />
              <Square shouldShow={isMenuOpen} />
              <Square shouldShow={isMenuOpen} />
              <Square shouldShow={isMenuOpen} />
              <Square shouldShow={isMenuOpen} />
            </div>
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full w-full">
                  <Dialog.Panel className="pointer-events-auto relative w-full">
                    <div className="relative flex h-full flex-col overflow-y-scroll bg- text-white pt-[9rem] pb-16">
                      {/*  */}
                      {/*  */}
                      <div className="absolute w-full top-0 left-0 grid grid-cols-3 px-6 md:px-16 py-4 md:py-8 items-center justify-items-center">
                        <button
                          onClick={() => setMenuOpen(false)}
                          className="font-semibold hover:text-gray-500 inline-flex flex-col uppercase mr-auto">
                          <span className="sr-only">close</span>
                          <XMarkIcon className="h-10 w-10" aria-hidden="true" />
                        </button>
                        {/*  */}
                        {/*  */}
                        {/*  */}
                        <NavLink to="/">
                          <svg
                            className="w-20 h-20 fill-white"
                            viewBox="0 0 2031.48 1304.66">
                            <polygon points="207.01 1005.78 445.33 1005.78 445.33 483.71 652.34 483.71 652.34 298.91 0 298.91 0 483.71 207.01 483.71 207.01 1005.78" />
                            <path d="M1714.4,1022.43c138.35,0,247.41-50.49,317.08-141.37L1881,746.75c-41.4,52.52-90.88,82.81-154.5,82.81-99,0-165.61-68.67-165.61-176.72s66.65-176.72,165.61-176.72c63.62,0,113.1,30.3,154.5,82.81l150.46-134.31c-69.67-90.88-178.73-141.37-317.08-141.37-227.21,0-393.83,152.48-393.83,369.59s166.62,369.59,393.83,369.59Z" />
                            <polygon
                              points="975.29 0 1037.01 0 1037.01 1304.66 975.29 1304.66 975.29 0"
                              fillRule="evenodd"
                            />
                          </svg>
                        </NavLink>
                        {/*  */}
                        {/*  */}
                        {/*  */}
                      </div>
                      <div className="relative mt-6 flex-1 px-6 md:px-16">
                        <div className="h-full" aria-hidden="true">
                          <div className="flex flex-col items-center font-extrabold text-2xl md:text-5xl space-y-6 w-auto overflow-hidden uppercase">
                            <NavLink
                              variants={textVariants}
                              to="/about"
                              className="hover:text-gray-500">
                              About
                            </NavLink>
                            <NavLink
                              variants={textVariants}
                              to="/trading"
                              className="hover:text-gray-500">
                              Trading Partners
                            </NavLink>
                            <NavLink
                              variants={textVariants}
                              to="/team"
                              className="hover:text-gray-500">
                              Team
                            </NavLink>
                            <NavLink
                              variants={textVariants}
                              to="/blog"
                              className="hover:text-gray-500">
                              The Traders' Blog
                            </NavLink>
                            <NavLink
                              variants={textVariants}
                              to="/contacts"
                              className="hover:text-gray-500">
                              Contacts
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </div>
              </div>
            </div>
          </Dialog>
        )}

        {isStaffOpen && (
          <Dialog
            static
            as={motion.div}
            className="relative z-[990]"
            open={true}
            initial="hidden"
            animate="visible"
            variants={modalVariants}
            onClose={() => setStaffOpen(false)}>
            <div className="fixed inset-0 overflow-hidden grid grid-cols-6 h-full">
              <Square shouldShow={isStaffOpen} />
              <Square shouldShow={isStaffOpen} />
              <Square shouldShow={isStaffOpen} />
              <Square shouldShow={isStaffOpen} />
              <Square shouldShow={isStaffOpen} />
              <Square shouldShow={isStaffOpen} />
            </div>
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full w-full">
                  <Dialog.Panel className="pointer-events-auto relative w-full">
                    <div className="relative flex h-full flex-col overflow-y-scroll text-white pt-[9rem] pb-16">
                      {/*  */}
                      {/*  */}
                      <div className="absolute w-full top-0 left-0 grid grid-cols-3 px-6 md:px-16 py-4 md:py-8 items-center justify-items-center">
                        <span></span>
                        {/*  */}
                        {/*  */}
                        <NavLink to="/">
                          <svg
                            className="w-20 h-20 fill-white"
                            viewBox="0 0 2031.48 1304.66">
                            <polygon points="207.01 1005.78 445.33 1005.78 445.33 483.71 652.34 483.71 652.34 298.91 0 298.91 0 483.71 207.01 483.71 207.01 1005.78" />
                            <path d="M1714.4,1022.43c138.35,0,247.41-50.49,317.08-141.37L1881,746.75c-41.4,52.52-90.88,82.81-154.5,82.81-99,0-165.61-68.67-165.61-176.72s66.65-176.72,165.61-176.72c63.62,0,113.1,30.3,154.5,82.81l150.46-134.31c-69.67-90.88-178.73-141.37-317.08-141.37-227.21,0-393.83,152.48-393.83,369.59s166.62,369.59,393.83,369.59Z" />
                            <polygon
                              points="975.29 0 1037.01 0 1037.01 1304.66 975.29 1304.66 975.29 0"
                              fillRule="evenodd"
                            />
                          </svg>
                        </NavLink>
                        {/*  */}
                        {/*  */}
                        <button
                          onClick={() => setStaffOpen(false)}
                          className="font-semibold hover:text-gray-500 inline-flex flex-col uppercase ml-auto">
                          <span className="sr-only">close</span>
                          <XMarkIcon className="h-10 w-10" aria-hidden="true" />
                        </button>
                        {/*  */}
                      </div>
                      <div className="relative mt-6 flex-1 px-6 md:px-16">
                        <div className="h-full" aria-hidden="true">
                          <div className="flex flex-col items-center font-extrabold text-2xl md:text-5xl space-y-6 w-auto overflow-hidden uppercase">
                            <motion.a
                              variants={textInvertedVariants}
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://drive.google.com/drive/folders/1nuejpNS2XVNZywj2W7JHx8FEvCOkNyzV?usp=sharing"
                              className="hover:text-gray-500">
                              eLibrary
                            </motion.a>
                            <motion.a
                              variants={textInvertedVariants}
                              href="https://thecorporation.xyz/webmail"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-gray-500">
                              Email
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </div>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
export default Navbar;
