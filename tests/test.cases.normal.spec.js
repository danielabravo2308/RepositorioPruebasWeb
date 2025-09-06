const {test, expect} = require('@playwright/test');

test.only('valida el Regex de Facebook', async({page})=> {
  await page.goto('https://www.facebook.com/');
  await sleep(5000); 
  // Resultado Esperado
  await expect(page).toHaveTitle(/facebook/i);
});


test.only('valida titulo Linkedin', async ({page})=> {
  await page.goto('https://bo.linkedin.com/');
  await sleep(5000);
  // Resultado Esperado
  await expect(page).toHaveTitle('LinkedIn Bolivia: inicio de sesión o registro');
});

function sleep (time){
  return new Promise((resolve)=> setTimeout(resolve,time));
}