import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

export const popConfetti = () => confetti({
  particleCount: 150,
  spread: 60
});