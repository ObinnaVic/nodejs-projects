const KeyManager = require("../lib/KeyManager.js");
const inquirer = require("inquirer");
const colors = require("colors");

const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: "input",
                name: "key",
                message: "Enter api key ".green + "Get key at https://nomics.com"
            }
        ])

        const key = keyManager.setKey(input.key);

        if (key) {
            console.log("API key set successfully".blue);
        }
    },

    show() {
        console.log("This is the show function");
    },

    remove() {
        console.log("this is the remove function");
    }

}

module.exports = key;