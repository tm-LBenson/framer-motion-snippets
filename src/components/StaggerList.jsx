import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function StaggerList() {

  
  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const ulVars = {
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const [nums] = useState(["One", "Two", "Three", "Four"]);

  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={ulVars}
    >
      {nums.map((num) => (
        <motion.li
          variants={itemVars}
          key={num}
        >
          {num}
        </motion.li>
      ))}
    </motion.ul>
  );
}
