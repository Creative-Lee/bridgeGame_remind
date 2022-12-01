class Validation {
  static validateBridgeSize(size) {
    if (!Validation.#isValidRange(size)) {
      throw new Error('[ERROR] 사이즈 에러');
    }
  }

  static #isValidRange(size) {
    return 3 <= size && size <= 20;
  }
}

module.exports = Validation;
