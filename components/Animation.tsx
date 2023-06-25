export const fadeVariant = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  exit: { opacity: 0 },
};

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

export const homeVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.6,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  exit: { opacity: 0 },
};
