const {test, expect} = require('@playwright/test');

const casos = [
    {name:"Caso 1", url:"https://www.facebook.com/", esperado: "Facebook - log in or sign up"},
    {name: "Caso 2" , url:"https://www.facebook.com/", esperado: /facebook/i},
    {name:"Caso 3", url:"https://bo.linkedin.com/", esperado: "LinkedIn Bolivia: inicio de sesión o registro"},
    {name:"Caso 4", url:"https://bo.linkedin.com/", esperado: /LinkedIn/i}
];

for (const {name, url, esperado} of casos) {
    test.only(`valida el titulo correcto en ${name}`,async ({page}) => {
        
        await page.goto(url);
        //console.log(await page.title());
        await sleep(3000);
        await expect(page).toHaveTitle(esperado);
    });
}

function sleep (time){
  return new Promise((resolve)=> setTimeout(resolve,time));}