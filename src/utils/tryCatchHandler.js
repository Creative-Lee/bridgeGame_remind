const OutputView = require('../views/OutputView.js');

const tryCatchHandler = (excution, reRequest) => {
  try {
    excution();
  } catch ({ message }) {
    OutputView.print(message);
    reRequest();
  }
};

module.exports = tryCatchHandler;
