// playrights configuraciones -- CAPTURAR EVIDENCIAS DE BUG

/** @type {import ('@playwright/test').PlaywrightTestConfig} */

const config = {
    use:{
        screenshot:'only-on-failure', // Sacar screenshot en caso de falla
        trace:'retain-on-failure'    // Retener traza en caso de falla
    },
    projects:[ // proyectos en los cuales se va a ejecutar las pruebas
        {name: 'Chromium',use: {browserName:'chromium'}},         // Diccionarios de navegadores
        {name: 'Firefox',use: {browserName:'firefox'}}
    ],

    testDir:"tests", // Directorio de los tests que se van a ejecutar
    timeout:30000, // tiempo maximo de ejecucion de un test
    expect:{
        timeout:5000, // tiempo maximo de espera de una verificacion
    },
};

module.exports = config; // Exportar la configuracion