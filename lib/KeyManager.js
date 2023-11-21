const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.config = new Configstore(pkg.name);
  }

  setKey(key) {
    this.config.set("API-KEY", key);
    return key;
  }

  getKey() {
    const key = this.config.get("API-KEY");
    if (!key) {
      throw new Error("No Api key found, -- Get a key at https://nomics.com");
    }

    return key;
  }

  deleteKey() {
    const key = this.config.get("API-KEY");

    if (!key) {
      throw new Error("No Api key found, -- Get a key at https://nomics.com");
    }

    this.config.delete(key);
    return;
  }
}

module.exports = KeyManager;
