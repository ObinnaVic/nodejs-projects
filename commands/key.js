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

        const inputTwo = await inquirer.prompt([
          {
            type: "input",
            name: "label",
            message: "Enter api key label".green,
          },
        ]);

        const key = keyManager.setKey(inputTwo.label, input.key);

        if (key) {
            console.log("API key set successfully".blue);
        }
    },

    async show() {
        try {

            const input = await inquirer.prompt([{
                type: "input",
                name: "label",
                message: "Enter Api key label"
            }])

            const key = new KeyManager();
            const Apikey = key.getKey(input.label);
            console.log(Apikey);
            return Apikey;
        } catch (err) {
            console.log(err);
        }
    },

    async remove() {
        try {

            const input = await inquirer.prompt([{
                type: "input",
                name: "label",
                message: "Enter Api key label"
            }])

            const key = new KeyManager();
            key.deleteKey(input.label);
            console.log(`${input.label} deleted successfully`);
        } catch (err) {
            console.log(err);
        }
    }

}

module.exports = key;