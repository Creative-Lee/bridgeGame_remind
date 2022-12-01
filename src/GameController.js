const InputView = require('./views/InputView.js');
const OutputView = require('./views/OutputView.js');
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
    try {
      Validation.validateBridgeSize(size);
    } catch ({ message }) {
      OutputView.print(message);
      this.#requestBridgeSize();
    }
  }
}

module.exports = GameController;
