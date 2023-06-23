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

export const homeVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3,
      duration: 1.6,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  exit: { opacity: 0 },
};
