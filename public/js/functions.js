/*
|========================================================================|
|                                                                        |
|                              Functions                                 |
|                                                                        |
|========================================================================|
*/

import { bober, CyberPet } from "./classes.js";

/**
 *Runs code at set interval. parameter: (interval = number in milliseconds)
 */
export function performActionEachInterval(interval = 0, pet) {
  const intervalId = setInterval(() => {
    const isAlive = statsUsage(pet);

    if (!isAlive) {
      clearInterval(intervalId);
      console.log(
        `${pet.name} died! You're a monster, you should be ashamed of yourself...`
      );
    }
  }, interval);
}

export function statsUsage(pet) {
  const stats = pet.stats[0];

  console.log(`Hunger: ${pet.stats[0].hunger}`);
  console.log(`Happiness: ${pet.stats[0].happiness}`);
  console.log(`Energy: ${pet.stats[0].energy}`);

  // Substract stats each 3000ms
  // If pet is bober, then hunger stat subsraction is greater than other pets
  if (pet == bober) {
    stats.hunger -= 14;
  } else {
    stats.huner -= 7;
    stats.happiness -= 3;
    stats.energy -= 5;
  }

  // Check if any stats drop to 0
  if (stats.hunger <= 0 || stats.happiness <= 0 || stats.energy <= 0) {
    return false; // Pet is Deadge
  }

  return true; // Still Alive => Program still running
}

export function gameLoop(pet) {
  performActionEachInterval(3000, pet);
}
