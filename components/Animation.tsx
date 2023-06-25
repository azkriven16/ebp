export const loadingVariant = {
  hidden: {
    opacity: 0,
    y: "-5%",
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: "10%",
  },
};

export const heroVariant = {
  hidden: {
    rotateY: 100,
    y: 100,
    opacity: 0,
  },
  visible: {
    rotateY: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: "10%",
  },
};
