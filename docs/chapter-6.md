# Étape 6 - Usage assisté 🦾

🎯 L'objectif ici est d'utiliser les outils d'aide à la création et au debug de playwright.

## Génération avec codegen

Cette fois ci nous allons utiliser le codegen de playwright pour nous aider à créer nos fichiers de test.

- Lancer le codegen avec la commande suivante :

```shell
yarn playwright codegen
# OU
npx playwright codegen
```

Effectuez les actions suivantes pour lancer l'auto génération de code

- Naviguez vers https://playwright.dev/
- Cliquez sur le bouton contenant le texte `Get started`.
- Cliquez la recherche
- Cherchez `locators` dans la pop-in qui vient de s'ouvrir et appuyer sur entrée
- Sur la page locators, cliquez sur le premier lien de la page avec le texte `Locators`
- Sur l'API de locators, cliquez dans le menu de droite sur le lien `clear`

<Solution>

```typescript
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search docs').fill('locators');
  await page.getByPlaceholder('Search docs').press('Enter');
  await page
    .getByRole('paragraph')
    .filter({ hasText: "Locators are the central piece of Playwright's auto-waiting and retry-ability. I" })
    .getByRole('link', { name: 'Locator' })
    .click();
  await page.getByRole('link', { name: 'clear' }).click();
});
```

</Solution>

- Copiez le code généré dans le fichier `chapter_6.spec.ts`.

- Vérifiez que vous êtes bien sur l'url 'https://playwright.dev/docs/api/class-locator#locator-clear' à la fin de votre test.

<Solution>

```typescript
await expect(page).toHaveURL('https://playwright.dev/docs/api/class-locator#locator-clear');
```

</Solution>

- Lancez les tests, que constatez vous ?

## Visualiser avec Trace Viewer

Nous allons maintenant utiliser les traces pour nous aider à debugger avec toute la puissance de playwright.

Pour cela, lancez les tests avec les traces activées,

```shell
yarn test:e2e chapter_6 --trace on
# OU
npm run test:e2e -- chapter_6 --trace on
```

- Ouvrez maintenant vos traces avec la commande suivante

```shell
yarn playwright show-trace <PATH_TO_YOUR_ZIP_FILE>
# OU
npx playwright show-trace <PATH_TO_YOUR_ZIP_FILE>
```

Exécutez-les pas à pas dans l'interface qui vient de s'ouvrir et corrigez votre test. Quelques points d'attention pour aider à corriger les problèmes rencontrés :

- vous pouvez attendre que toutes les requêtes du site soient terminées
- vous pouvez attendre qu'une requête avec une certaine forme soit terminée
- vous pouvez détecter si vous êtes sur un device mobile

## UI mode

Playwrigh a ajouté dans sa dernière version une interface permettant de lancer nos tests et d'inspecter leurs traces !

- Lancez vos tests en mode UI

```shell
yarn test:e2e chapter_6 --ui
# OU
npm run test:e2e -- chapter_6 --ui
```

- Jouez avec l'interface pour exécutez vos tests sous chromium, firefox et Pixel 4.

<br/>

Félicitations, vous êtes arrivés au bout du workshop Playwright RCA 👏  
Vous êtes fin prêts pour vous lancer seul dans de nouvelles aventures avec Playwright dans votre besace 💪
