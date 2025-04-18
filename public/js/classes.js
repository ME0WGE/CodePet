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
  feed = (pet) => {
    let hunger = Object.values([0][0]);
  };
  play = (pet) => {};
  sleep = (pet) => {};
  checkState = (pet) => {};
}
export class Bober extends CyberPet {
  constructor(name = "", species = "") {
    super(name, species, stats);
  }
}
export class Cat extends CyberPet {
  constructor(name = "", species = "") {
    super(name, species, stats);
  }
}
export class Dragon extends CyberPet {
  constructor(name = "", species = "") {
    super(name, species, stats);
  }
}
// Instances
const bober = new Bober("Bober", "Bobr");
const cat = new Cat("Kitty", "Cat");
const dragon = new Dragon("Draco", "Dragon");
