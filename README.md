# **Projet : Mon CyberPet**

Crée un jeu de simulation de compagnon virtuel appelé "CyberPet". Le joueur doit s'occuper d'un animal virtuel (chien, chat ou dragon) en gérant ses besoins (faim, bonheur, énergie) via une interface web. Les choix du joueur influencent la santé et l'évolution de l'animal.

---

## **Étapes du projet**

### _1. Planification et structure de base_
```
Définis les besoins du CyberPet : faim, bonheur, énergie (valeurs numériques de 0 à 100).

Crée une interface HTML simple avec :
-	Une zone pour afficher le nom, l'espèce et les stats (faim, bonheur, énergie).
-	Des boutons pour nourrir, jouer et faire dormir.
-	Une zone pour afficher des messages (ex. : "Ton CyberPet est heureux !").
-	Crée un fichier JavaScript pour gérer la logique.
```
---

### _2. Création des classes et sous-classes_
```
Crée une classe de base CyberPet avec :
-	Des variables pour stocker le nom, l'espèce et les stats (faim, bonheur, énergie).

Des fonctions pour :
-	Nourrir (augmente la faim, diminue légèrement l'énergie).
-	Jouer (augmente le bonheur, diminue l'énergie et la faim).
-	Dormir (augmente l'énergie, diminue légèrement la faim).
-	Vérifier l'état (retourne un message selon les stats, ex. : "Je suis fatigué !").

Crée trois sous-classes qui héritent de CyberPet :
-	Dog : Bonus au bonheur quand on joue, mais la faim diminue plus vite.
-	Cat : Consomme moins d'énergie en dormant, mais le bonheur baisse si on ne joue pas souvent.
-	Dragon : La faim diminue très lentement, mais l'énergie chute rapidement si on joue trop.
-	Chaque sous-classe doit redéfinir une fonction (par exemple, play) pour refléter son comportement unique.
```
---

### _3. Gestion du temps avec des boucles_
```
Implémente une boucle (via setInterval) pour simuler le passage du temps :
-	Toutes les X secondes, réduit légèrement les stats (faim, bonheur, énergie) du CyberPet.
-	Vérifie si une stat atteint 0 (affiche un message d'alerte, ex. : "Ton CyberPet est épuisé !").
-	Ajoute une fonction pour arrêter la boucle si le CyberPet "meurt" (toutes les stats à 0).
```
---

### _4. Interaction avec le joueur_
```
-	Crée des fonctions pour gérer les clics sur les boutons (nourrir, jouer, dormir).
-	Mets à jour les stats du CyberPet après chaque action.
-	Affiche les nouvelles stats et un message dans l'interface après chaque interaction.
-	Ajoute une variable pour stocker l'historique des actions (ex. : tableau des 5 dernières actions).
```
---

### _5. Sauvegarde et progression_
```
-	Crée une fonction pour sauvegarder l'état du CyberPet (nom, espèce, stats) dans localStorage.
-	Ajoute une fonction pour charger les données au démarrage, ou créer un nouveau CyberPet si aucune sauvegarde n'existe.
-	Permets au joueur de choisir l'espèce (chien, chat, dragon) au début via un menu déroulant.
```
---

### _6. Bonus : API et DOM_
```
API : Intégration d'une API externe
-	Utilise une API publique (ex. : dog-api, cat-fact, ou une API de citations comme quotable.io).
-	Crée une fonction pour récupérer une donnée (ex. : une image de chien ou une citation motivante) quand le joueur interagit avec le CyberPet.
-	Affiche le résultat dans l'interface (ex. : une image sous le CyberPet ou un message dans la zone de texte).

DOM : Amélioration de l'interface
-	Ajoute un élément visuel dynamique (ex. : une barre de progression pour chaque stat).
-	Crée une animation simple (via CSS ou JavaScript) quand une action est effectuée (ex. : le CyberPet "saute" quand il est heureux).
-	Affiche l'historique des actions dans une liste <ul> mise à jour dynamiquement.

Conseils
-	Commence par la classe CyberPet et teste les fonctions de base avant d'ajouter les sous-classes.
-	Débogue les boucles de temps pour éviter des diminutions trop rapides des stats.
-	Pour le bonus API, teste l'appel avec fetch dans la console avant de l'intégrer.
-	Garde l'interface simple pour te concentrer sur la logique JavaScript.
```
