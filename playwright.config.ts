import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['./features/todopage.feature'],
  importTestFrom: 'steps/fixtures.ts',
});

export default defineConfig({
  testDir,
  reporter: 'html',
});
