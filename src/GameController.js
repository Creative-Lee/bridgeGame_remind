const InputView = require('./views/InputView.js');
const Bridge = require('./Bridge.js');
const BridgeGame = require('./BridgeGame.js');
const Validation = require('./Validation.js');
const tryCatchHandler = require('./utils/tryCatchHandler.js');
const { makeBridge } = require('./BridgeMaker.js');
const { generate } = require('./utils/BridgeRandomNumberGenerator.js');

class GameController {
  #bridgeGame;

  start() {
    this.#requestBridgeSize();
  }

  #requestBridgeSize() {
    InputView.readBridgeSize((size) => {
      tryCatchHandler(
        () => this.#initBridgeGame(size),
        () => this.#requestBridgeSize()
      );
    });
  }

  #initBridgeGame(size) {
    Validation.validateBridgeSize(size);

    const directions = makeBridge(size, generate);
    const bridge = new Bridge(directions);

    this.#bridgeGame = new BridgeGame(bridge);
  }
}

module.exports = GameController;
