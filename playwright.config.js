// playrights configuraciones

/** @type {import ('@playwright/test').PlaywrightTestConfig} */

const config = {
    use:{
        screenshot:'on-on-failure',
        trace:'retain-on-failure'
    },
    projects:[
        {name: 'Chromium',use: {browserName:'chromium'}},
        {name: 'Firefox',use: {browserName:'firefox'}}
    ],

    testDir:"tests",
    timeout:30000,
    expect:{
        timeout:5000,
    },
};