const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.config = new Configstore(pkg.name);
  }

  setKey(label, key) {
    this.config.set(label, key);
    return key;
  }

  getKey(label) {
    const key = this.config.get(label);
    if (!key) {
      throw new Error("No Api key found, -- Get a key at https://nomics.com");
    }

    return key;
  }

  deleteKey(label) {
    const key = this.config.get(label);

    if (!key) {
      throw new Error("No Api key found, -- Get a key at https://nomics.com");
    }

    this.config.delete(label);
    return;
  }
}

module.exports = KeyManager;
