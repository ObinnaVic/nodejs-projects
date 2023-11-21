const program = require("commander");
const check = require("./commands/check");


program
    .command("price")
    .description("Check price of crypto currencies")
    .option("--coin", "Select the coin to check price info", "BTC,ETH,XRP")
    .option("--cur", "select preferred currency", "USD")
    .action((cmd) => check.price(cmd));

program.parse(process.argv);