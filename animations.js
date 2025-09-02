// Animaciones

// -------- Color Interpolation --------
gsap.to("#animated-span", {
      keyframes: [
        { color: "#6b21a8", x: -20, y: 20, duration: 1.5 },
        { color: "#9333ea", x: 0, y: 0, duration: 1.5 },
        { color: "#a855f7", x: 20, y: -20, duration: 1.5 },
        { color: "#d946ef", x: -20, y: 20, duration: 1.5 }
      ],
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });