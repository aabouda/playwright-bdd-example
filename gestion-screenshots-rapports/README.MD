
# Projet Cypress avec Authentification Luxtrust

Ce projet utilise Cypress et pour gérer l'authentification Luxtrust.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Node.js
- npm

De plus, veuillez installer les dépendances de développement suivantes :

```
npm install --save-dev @badeball/cypress-cucumber-preprocessor
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
npm install --save-dev @nut-tree/nut-js
npm install --save-dev cypress
npm install --save-dev esbuild
npm install --save-dev multiple-cucumber-html-reporter
npm install --save-dev node-process-windows
```

## Installation

1. Clonez ce repository sur votre machine :
   ```
   git clone <repo-gitlab>
   ```

2. Accédez au répertoire du projet :
   ```
   cd nom-du-projet
   ```

3. Installez les dépendances du projet :
   ```
   npm install
   ```

## Structure du Projet

- `cypress`: Contient les fichiers de configuration et les spécifications de test.
- `cypress/e2e/features`: Répertoire où se trouvent les fichiers BDD des tests.
- `cypress/pages`: Répertoire où se trouvent les fichiers JavaScript des fonctions d'interaction avec les pages.
- `cypress/support`: Contient les fichiers pour les scripts personnalisées dans Cypress.
- `cypress/e2e/step_definitions`: Contient les fichiers d'implementation des pour les steps BDD.
- `cypress/fixtures`: Répertoire pour les fichiers de données de test.
## Intégration avec un Projet Apart

Il faut avoir le fichier `cypress.report.js` dans votre projet, ce script permet de télécharger le formateur JSON de Cucumber en fonction du système d'exploitation, génère un rapport HTML à partir des fichiers JSON produits par Cypress Cucumber, et le sauvegarde dans le répertoire des rapports de Cypress. Le rapport inclut des métadonnées telles que le navigateur utilisé, la version du navigateur, le système d'exploitation, la version du système d'exploitation, etc. Le script télécharge le formateur JSON de Cucumber, génère le rapport HTML à l'aide de `multiple-cucumber-html-reporter`, et l'enrichit avec des informations sur l'exécution des tests Cypress.

Il faut parametrer votre `cypress-cucumber-preprocessor` dans `package.json` pour que le rapport d'execution JSON soient géneré dans cet emplacement `cypress/reports/json/cucumber-report.json`:
```json
"cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/e2e/step_definitions/**/*.js",
    "json": {
      "enabled": true,
      "formatter": ".bin/cucumber-json-formatter",
      "output": "cypress/reports/json/cucumber-report.json"
    },
    "messages": {
      "enabled": true,
      "output": "cypress/reports/messages/cucumber-messages.ndjson"
    }
  }
```

Il faut avoir ce bout de code dans votre `cypress.config.js` pour intégrer le script:
```js
on("after:run", async (results) => {
   if (results) {
      await afterRunHandler(config);
      fs.writeFileSync(
         "cypress/reports/results.json",
         JSON.stringify(
            {
               browserName: results.browserName,
               browserVersion: results.browserVersion,
               osName: results.osName,
               osVersion: results.osVersion,
               nodeVersion: results.config.resolvedNodeVersion,
               cypressVersion: results.cypressVersion,
               startedTestsAt: results.startedTestsAt,
               endedTestsAt: results.endedTestsAt,
            },
            null,
            "\t"
         )
      );
   }
});
```

Après l'execution des scénarios de test Cucumber, un fichier Cucumber Report intitulé `reports/json/cucumber-report.json` est généré. Pour générer un fichier HTML report, il faut executer la commande de génération des rapports cucumber HTML `npm run report`, puis vous trouverez le rapport HTML dans le fichier `reports/index.html`, ce fichier contient les steps de chaque scénario ainsi que le log d'execution, pour les steps échouées, vous trouverez leurs screenshots correspondants.
## Utilisation

Pour exécuter les tests, utilisez la commande suivante :
```
npx cypress open
```
Un fichier Cucumber Report sera crée après l'execution des scénarios de test nommé `reports/json/cucumber-report.json`. Ensuite pour générer un rapport HTML, il faut executer la commande suivante :
```
npm run report
```