/*
Crée une classe de base CyberPet avec :
-	Des variables pour stocker le nom, l'espèce et les stats (faim, bonheur, énergie).

Des fonctions pour :
-	Nourrir (augmente la faim, diminue légèrement l'énergie).
-	Jouer (augmente le bonheur, diminue l'énergie et la faim).
-	Dormir (augmente l'énergie, diminue légèrement la faim).
-	Vérifier l'état (retourne un message selon les stats, ex. : "Je suis fatigué !").

Crée trois sous-classes qui héritent de CyberPet :
-	Bober : Bonus au bonheur quand on joue, mais la faim diminue plus vite.
-	Cat : Consomme moins d'énergie en dormant, mais le bonheur baisse si on ne joue pas souvent.
-	Dragon : La faim diminue très lentement, mais l'énergie chute rapidement si on joue trop.
-	Chaque sous-classe doit redéfinir une fonction (par exemple, play) pour refléter son comportement unique.
*/
/*
|========================================================================|
|                                                                        |
|                               Variables                                |
|                                                                        |
|========================================================================|
*/
export var playCount = 0;

/*
|========================================================================|
|                                                                        |
|                               Class                                    |
|                                                                        |
|========================================================================|
*/
// import { bober, cat, dragon } from "./instances.js";

export class CyberPet {
  constructor(name = "", species = "") {
    this.name = name;
    this.species = species;
    this.stats = [
      {
        hunger: 100,
        happiness: 100,
        energy: 100,
      },
    ];
  }
  feed = () => {
    let hunger = Object.values(this.stats[0])[0];
    let energy = Object.values(this.stats[0])[2];

    hunger += 25;
    energy -= 25;
  };
  play = () => {
    let hunger = Object.values(this.stats[0])[0];
    let happiness = Object.values(this.stats[0])[1];
    let energy = Object.values(this.stats[0])[2];

    happiness += 45;
    hunger -= 25;
    energy -= 35;
  };
  sleep = () => {
    let hunger = Object.values(this.stats[0])[0];
    let energy = Object.values(this.stats[0])[2];

    energy += 100;
    hunger -= 50;
  };
  checkState = () => {
    let hunger = Object.values(this.stats[0])[0];
    let happiness = Object.values(this.stats[0])[1];
    let energy = Object.values(this.stats[0])[2];

    // Hunger State
    if (hunger <= 25) {
      console.log(`GRRRRRR! I'm really hungaryyy, pwease feed me :< `);
    } else if (hunger <= 50) {
      console.log(
        `*ekhm* *ekhm* my belly going brrrr, give me food *angry stare*`
      );
    } else if (hunger <= 100) {
      console.log(
        `woooah *BURP* ooooh why feed me so much, me really full, me not gonna have *PROUT* a summer body`
      );
    }
    // Happiness State
    if (happiness <= 25) {
      console.log(
        `*sobbs* why treat me that badly, me only smol ${this.species}, not a monster *starts crying*`
      );
    } else if (happiness <= 50) {
      console.log(`do you want to play a game? *menacing stare*`);
    } else if (happiness <= 100) {
      console.log(`HAPPY HAPPY HAPPY *silly dance* `);
    }
    // Energy State
    if (energy <= 25) {
      console.log(`*falls from fatigue* OUUUCH, I really need to sleep...`);
    } else if (energy <= 50) {
      console.log(`*yawns* gimme a pillow!!!`);
    } else if (energy <= 100) {
      console.log(`*tweaking* PLAY! PLAY! PLAY! PLAY! PLAY! PLAY!`);
    }
  };
}
export class Bober extends CyberPet {
  constructor(name = "", species = "") {
    super(name, species);
    this.playBonus = 50;
    this.playMalus = 35;
    this.playEnergy = 25;
  }
  play = () => {
    let hunger = Object.values(this.stats[0])[0];
    let happiness = Object.values(this.stats[0])[1];
    let energy = Object.values(this.stats[0])[2];

    happiness += 75;
    hunger -= 25;
    energy -= 35;
  };
}
export class Cat extends CyberPet {
  constructor(name = "", species = "") {
    super(name, species);
  }
  sleep = () => {
    let hunger = Object.values(this.stats[0])[0];
    let energy = Object.values(this.stats[0])[2];

    energy += 100;
    hunger -= 15;
  };
}
export class Dragon extends CyberPet {
  constructor(name = "", species = "") {
    super(name, species);
  }
  play = () => {
    let hunger = Object.values(this.stats[0])[0];
    let happiness = Object.values(this.stats[0])[1];
    let energy = Object.values(this.stats[0])[2];

    happiness += 45;
    hunger -= 25;
    energy -= 35;

    playCount += 1;

    if (playCount > 3 && playCount % 2 == 1) {
      // TODO: Energie diminue de 75 points;
    }
  };
}
/*
|========================================================================|
|                                                                        |
|                               Instances                                |
|                                                                        |
|========================================================================|
*/
export const bober = new Bober("Bober", "Bobr");
export const cat = new Cat("Kitty", "Cat");
export const dragon = new Dragon("Draco", "Dragon");
