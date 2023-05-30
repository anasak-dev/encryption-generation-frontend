/**
 * Function to add provided random letters
 * @param {HTMLDivElement} item container html element
 */
import { countLettersToFillDiv } from "./countLettersToFillDiv.js";
import { alphabets } from "./alphabets.js";
import { config } from "./config.js";
export const addRandomLetters = (item) => {
  const container = countLettersToFillDiv(
    item.getBoundingClientRect().width,
    item.getBoundingClientRect().height
  );
  let words = [];
  for (let index = 0; index < container; index++) {
    const randomLetter = alphabets[(alphabets.length * Math.random()) | 0];
    const randomBold = alphabets[((alphabets.length / 4) * Math.random()) | 0];
    if (randomLetter == randomBold) {
      words.push(`<strong>${randomLetter}</strong>`);
    }
    words.push(alphabets[(alphabets.length * Math.random()) | 0]);
  }
  item.querySelector(config.elementClass).innerHTML = words.join("");
};
