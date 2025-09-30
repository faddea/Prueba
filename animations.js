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

gsap.from("#animated-span", {opacity: 0, scale: 0.5, duration: 1, ease: "back.out(1.7)"});

gsap.from("section h1", {y: 50, opacity: 0, duration: 1, ease: "power3.out"});
gsap.from("section p", {y: 30, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out"});
gsap.from("section img", {y: 80, opacity: 0, duration: 1, delay: 1, ease: "elastic.out(1, 0.5)"});
