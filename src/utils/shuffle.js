// src/utils/shuffle.js

// Fisher-Yates (Knuth) shuffle algorithm
export const shuffleArray = (array) => {
    let shuffled = array.slice(); // Copy the array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  