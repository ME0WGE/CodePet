/*
|========================================================================|
|                                                                        |
|                              Functions                                 |
|                                                                        |
|========================================================================|
*/
/**
 *Runs code at set interval. parameter: (interval = number in milliseconds)
 */
export function performActionEachInterval(interval = 0) {
  setInterval(() => {
    console.log(`Prout`);
  }, interval);
}
export function gameLoop() {
  performActionEachInterval(3000);
}
