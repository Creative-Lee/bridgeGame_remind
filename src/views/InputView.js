const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine('다리의 길이를 입력해주세요.', callback);
  },

  readMoving() {},

  readGameCommand() {},
};

module.exports = InputView;
