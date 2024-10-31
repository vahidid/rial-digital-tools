import Banks from './../banks.json';
import { base10ToBase62, base62ToBase10 } from './baseConverter';
/**
 * Class representing a Card Number.
 */
class CardNumber {
  readonly number: string;
  readonly encoded: string;
  /**
   * Create a CardNumber instance.
   * @param {string} input - The card number or encoded card number.
   * @throws {Error} If the card number is invalid.
   */
  constructor(input: string) {
    if (/^[0-9]{16,}$/.test(input)) {
      this.number = input;
      this.encoded = this.encode();
    } else {
      this.encoded = input;
      this.number = this.decode();
    }

    if (!this.isValid()) {
      throw new Error('Invalid card number');
    }
  }

  /**
   * Encodes the card number to base62.
   * @returns {string} The encoded card number.
   */
  encode(): string {
    return this.encoded ? this.encoded : base10ToBase62(this.number);
  }

  /**
   * Decodes the encoded card number to base10.
   * @returns {string} The decoded card number.
   */
  decode() {
    return this.number ? this.number : base62ToBase10(this.encoded);
  }

  /**
   * Validates the card number using the Luhn algorithm.
   * @returns {boolean} True if the card number is valid, false otherwise.
   */
  isValid(): boolean {
    const L = this.number.length;
    if (
      L !== 16 ||
      Number(this.number.slice(0, 9)) === 0 ||
      Number(this.number.slice(9, 15)) === 0
    )
      return false;
    let s = 0;
    for (let i = 0; i < 16; i++) {
      const k = i % 2 === 0 ? 2 : 1;
      const d = Number(this.number[i]) * k;
      s += d > 9 ? d - 9 : d;
    }
    return s % 10 === 0;
  }

  /**
   * Retrieves the bank associated with the card number.
   * @returns {Object} The bank information or a default object if not found.
   */
  getBank() {
    const bin = Number(this.number.slice(0, 6));
    return (
      Banks.find((b) => b.BINs.includes(bin)) || { code: 0, name: 'unknown' }
    );
  }

  /**
   * Returns the card number as a string.
   * @returns {string} The card number.
   */
  toString(): string {
    return this.number;
  }
}

export default CardNumber;
