import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { testData } from '../utils/testData';

test("Login",async({page})=>{

await page.goto('/');

const login=new LoginPage(page);

await login.login(testData.username,testData.password);

});