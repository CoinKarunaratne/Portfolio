export let navVariants = {};
const isMobile = window.innerWidth < 768;
if (!isMobile) {
  navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 1,
        delay: 0,
      },
    },
  };
}
