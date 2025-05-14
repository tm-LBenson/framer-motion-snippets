import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
export default function Gallery() {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <motion.div layout>
        {[1, 2, 3].map((id) => (
          <motion.img
            key={id}
            src={`/img/${id}.png`}
            layoutId={`pic-${id}`}
            onClick={() => setSelected(id)}
          ></motion.img>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            layoutId={`pic-${selected}`}
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img src={`/img/${selected}.png`}></motion.img>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
