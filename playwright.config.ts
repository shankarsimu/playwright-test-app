import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 60000,

  retries: 2,

  use: {

    browserName: 'chromium',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    baseURL: 'https://www.saucedemo.com'
  },

  reporter: [

    ['html'],

    ['list']

  ]
});