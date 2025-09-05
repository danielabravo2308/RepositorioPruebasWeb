const {test , expect} = require('@playwright/test')

test ('valida el titulo exacto', async({page})=> {
//Abre pagina example.com
await page.goto('https://example.com')
// Verificacion del titulo exacto
await expect(page).toHaveTitle('Example Domain')

});



test ('valida titulo con regex', async ({page})=> {
  //Abre pagina example.com
await page.goto('https://example.com')

// Verificacion palabra 
await expect(page).toHaveTitle(/Example/)

});