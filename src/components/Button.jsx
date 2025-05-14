// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Button() {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95, rotate: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="btn"
      >
        Click Me
      </motion.button>
    </>
  );
}
