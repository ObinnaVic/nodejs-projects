const program = require("commander");
const key = require("./commands/key.js");

program
  .command("set")
  .description("Set API KEY -- Get at https://nomics.com")
  .action(key.set);

program
  .command("show")
  .description("show API key")
  .action(key.show);

program
  .command("remove")
  .description("Remove API key")
  .action(key.remove);

program.parse(process.argv);
