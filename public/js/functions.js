/*
|========================================================================|
|                                                                        |
|                              Functions                                 |
|                                                                        |
|========================================================================|
*/

import { bober, cat, CyberPet, dragon, playCount } from "./classes.js";

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
/**
 *Runs code at set interval. parameter: (interval = number in milliseconds)
 */
export function checkPlayCountEachInterval(interval = 0, pet) {
  const intervalId = setInterval(() => {
    const isHappy = happinessMonitoring(pet);

    if (!isHappy) {
      clearInterval(intervalId);
      console.log(
        `${pet.name} died by lack of happiness. You're a monster, you could've just played with it...`
      );
    }
  }, interval);
}

export function happinessMonitoring(pet) {
  const stats = pet.stats[0];
  if (playCount % 2 === 0) {
    stats.happiness -= 35;
    console.log(
      `*MEOOOOW* I want to PLAY! PLAY! PLAY! PLAY, I'll die if I don't play right MEOW *definitely not foreshadowing consequences*`
    );
  }

  if (stats.happiness <= 0) {
    return false; // Pet is deadge because of lack of happiness => Program stops and prints game over message
  }
  return true; // Still Alive => Program still running
}

export function statsUsage(pet) {
  const stats = pet.stats[0];

  console.log(`Hunger: ${pet.stats[0].hunger}`);
  console.log(`Happiness: ${pet.stats[0].happiness}`);
  console.log(`Energy: ${pet.stats[0].energy}
==========================`);

  // Stats usage each 3000ms
  // If pet is bober, then hunger usage is greater than other pets.
  if (pet == bober) {
    stats.hunger -= 14;
    stats.happiness -= 3;
    stats.energy -= 5;
  }
  // If pet is dragon, then hunger usage is lesser than other pets.
  if (pet == dragon) {
    stats.hunger -= 1;
    stats.happiness -= 3;
    stats.energy -= 5;
  }
  // Check if any stats drop to 0
  if (stats.hunger <= 0 || stats.happiness <= 0 || stats.energy <= 0) {
    return false; // Pet is Deadge => Program stops and prints game over message
  }
  return true; // Still Alive => Program still running
}

export function gameLoop(pet) {
  performActionEachInterval(3000, pet);
  checkPlayCountEachInterval(10000, pet);
}
