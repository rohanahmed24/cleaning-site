// Animation variants for Framer Motion
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5 
    }
  }
};

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5 
    }
  }
};

export const fadeInDown = {
  hidden: { 
    opacity: 0, 
    y: -30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5 
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5 
    }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5 
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5 
    }
  }
};

export const springUp = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20
    }
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 300
  }
};

export const hoverScaleLight = {
  scale: 1.02,
  transition: {
    type: "spring",
    stiffness: 300
  }
};

export const staggeredList = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const listItemVariant = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

// For buttons and interactive elements
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 0.4
  }
};

// Animation for SVG paths
export const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { 
        type: "spring", 
        duration: 1.5, 
        bounce: 0 
      },
      opacity: { duration: 0.5 }
    }
  }
};
