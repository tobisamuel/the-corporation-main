import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    transition: {
      when: "afterChildren",
      // staggerDirection: -1
    },
  },
};

const textVariants = {
  visible: {
    y: "0%",
    transition: { duration: 0.25, y: { stiffness: 1000, velocity: -100 } },
  },
  hidden: { y: "100%", transition: { y: { stiffness: 1000 } } },
};

const paragraphVariants = {
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.25, y: { stiffness: 1000, velocity: -100 } },
  },
  hidden: { y: "50%", opacity: 0, transition: { y: { stiffness: 1000 } } },
};

const hrVariants = {
  visible: { scaleX: 1, transition: { duration: 0.25 } },
  hidden: { scaleX: 0 },
};

function HeaderText() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.8 }}
          variants={containerVariants}
          className="overflow-hidden">
          <span className="relative block overflow-hidden mb-6">
            <motion.p
              className="font-normal tracking-wider"
              variants={textVariants}>
              Aren't we all buying or selling?
            </motion.p>
          </span>
          <span className="relative block overflow-hidden">
            <motion.h1
              variants={textVariants}
              className="text-2xl md:text-2xl md:tracking-widest leading-snug font-normal">
              welcome to the jack-of-all-trading business
            </motion.h1>
          </span>
          <span className="relative block overflow-hidden my-6">
            <motion.div
              style={{ originX: "center", originY: "center" }}
              variants={hrVariants}
              className="border-0 bg-black h-[1px] w-full mx-auto"
            />
          </span>
          <span className="relative block overflow-hidden mb-3">
            <motion.p
              variants={paragraphVariants}
              className="font-semibold text-sm">
              We are simply jack-of-all-trades just like the early men and women
            </motion.p>
          </span>
          <span className="relative block">
            <motion.p variants={paragraphVariants} className="md:max-w-[72ch] mx-auto">
              Our conglomerate vibes with the spirit of the early men and women.
              <span className="hidden md:block"></span>
              People who could leverage their resources to solve a myriad of
              problems. People extraordinarily gifted with innate abilities to
              improvise and engage in useful and usable trade-offs.
              <span className="hidden md:block"></span>
              People who were <strong>generalist yet specialists.</strong>
            </motion.p>
          </span>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
export default HeaderText;
