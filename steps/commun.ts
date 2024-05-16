import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "./fixtures";
import { getUrlFromJson } from "./../fonctions/commun";
const { Given, When, Then } = createBdd(test);

Given(
  "que l'utilisateur est sur l'application {string} avec la langue {string}",
  async ({ page }, app: string, lang: string) => {
     const url = await getUrlFromJson("B", app);
      await page.goto(url);
      process.env.APPLICATION = app;
      
  }
);
