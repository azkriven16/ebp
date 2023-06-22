export const fadeVariant = {
  hidden: { opacity: 1, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  exit: { opacity: 0 },
};

export const homeVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};
