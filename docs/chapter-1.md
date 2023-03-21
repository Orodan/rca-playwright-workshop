# Étape 1 - Infiltration 🥷

🎯 L'objectif ici est de récupérer l'arme ultime de Microsoft et de vérifier que tout est correctement installé pour la suite de votre mission.

## Pré-requis

Assurez-vous d'avoir [NodeJS](https://nodejs.org/en/) en version 16 ou supérieure

```
node -v # v16+
```

## Récupération du projet source

- Clonez le code source du codelab

```
git clone https://github.com/oroden/rca-workshop-playwright.git
```

- Puis installez les dépendances

```
yarn
# OU
npm install
```

## Installation de playwright

- Installez playwright

```
yarn add -D playwright
# OR
npm install -D playwright
```

- Vérifiez ensuite qu'il soit bien installé

```
yarn check
# OR
npm run check
```

Vous devriez constater que vous avez bien installé la dernière version de Playwright (`v1.32.1`).  

Le résultat de cette commande est la première phrase qui vous permettra de décoder les codes secrets de Microsoft. **Notez-la précieusement** dans `src/passphrases.txt`.

Bravo 💪 ! Avec cette première phrase, vous êtes maintenant prêt pour passer à la phase 2 du plan !