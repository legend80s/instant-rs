import prettyMilliseconds from 'pretty-ms';

export default class Instant {
  constructor() {
    this.start = Date.now();
  }

  /**
   * @returns {Instant}
   */
  static now() {
    return new Instant();
  }

  /**
   *
   * @param {Parameters<typeof prettyMilliseconds>[1]} [options]
   * @returns
   */
  elapsed(options) {
    const span = Date.now() - this.start;

    return prettyMilliseconds(span, options);
  }
}
