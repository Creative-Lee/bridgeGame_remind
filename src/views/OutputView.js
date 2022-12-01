const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printMap() {},

  printResult() {},

  print(msg) {
    Console.print(msg);
  },
};

module.exports = OutputView;
