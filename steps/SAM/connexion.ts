import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from './../fixtures';
import { getCredentialsFromFile, Credentials } from "./../../fonctions/commun";
import { connexionPage } from './../../pages/connexionPage';
const { Given, When, Then } = createBdd(test);



When("l'utilisateur {string} se connecte", async ({ page }, name: string) => {
  const app =  process.env.APPLICATION;
  if (app) {
      const credentials: Credentials | null = getCredentialsFromFile('B', name, app);
    if (credentials) {
        console.log('Username:', credentials.username);
        const varPassword = "PASSWORD_" + credentials.password
        const  password = process.env[varPassword];
        if(password){
          const loginPage = new connexionPage(page);
          await loginPage.login(credentials.username, password)
        }
      } else {
          console.log('Aucun identifiant trouvé pour les paramètres spécifiés.');
      }
  }

    
});

/*
Then('I see in title {string}', async ({ page }, text: string) => {
  await expect(page).toHaveTitle(new RegExp(text));
});

*/
