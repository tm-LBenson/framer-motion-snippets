import React from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Card() {
  return (
    <motion.div
      drag
      dragSnapToOrigin
      dragElastic={0.2}
      whileDrag={{ scale: 1.05 }}
      style={{
        width: 160,
        height: 100,
        borderRadius: 12,
        background: "#f38b66",
        display: "grid",
        placeContent: "center",
        marginBottom: 20,
      }}
    >
      Card And Some other text
    </motion.div>
  );
}
