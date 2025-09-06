const {test , expect} = require('@playwright/test')

// titulo de test case y async voy a hacer un request y voy a espera respuesta
test('valida el titulo exacto', async({page})=> {
  //Abre pagina example.com
  await page.goto('https://example.com/') 
  //  ejecuta por 5 seg la pagina 
  await sleep(5000); 

  // Verificacion del titulo exacto
  await expect(page).toHaveTitle('Exampre Domain')

});



test('valida titulo con regex', async ({page})=> {
  //Abre pagina example.com
  await page.goto('https://example.com/')
  //  ejecuta por 5 seg la pagina 
  await sleep(5000); 
  // Verificacion palabra es un regex y se busca la palabra dentro la pagina
  await expect(page).toHaveTitle(/Example/)

});

function sleep (time){
  return new Promise((resolve)=> setTimeout(resolve,time));
}