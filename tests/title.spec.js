const {test , expect} = require('@playwright/test')

test ('valida el titulo exacto', async({page})=> {
//Abre pagina example.com
await page.goto('https://example.com/')
await sleep(5000);

// Verificacion del titulo exacto
await expect(page).toHaveTitle('Example Domain')

});



test ('valida titulo con regex', async ({page})=> {
  //Abre pagina example.com
await page.goto('https://example.com/')
await sleep(5000);
// Verificacion palabra 
await expect(page).toHaveTitle(/Example/)

});

function sleep (time){
  return new Promise((resolve)=> setTimeout(resolve,time));
}