const InputView = require('./views/InputView.js');
const Bridge = require('./Bridge.js');
const BridgeMaker = require('./BridgeMaker.js');
const Validation = require('./Validation.js');

class GameController {
  start() {
    this.#requestBridgeSize();
  }

  #requestBridgeSize() {
    InputView.readBridgeSize(this.#makeBridge.bind(this));
  }

  #makeBridge(size) {
    Validation.validateBridgeSize(size);
  }
}

module.exports = GameController;
