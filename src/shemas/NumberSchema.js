// @ts-check

import validate from './utils';

class NumberSchema {
  type = 'number';

  shema = {
    required: null,
    positive: null,
    range: null,
  }

  isValid = (number) => {
    if (Number.isNaN(number)) return false;
    const errors = validate(this.shema, number);
    return errors.length === 0;
  }

  required = () => {
    this.shema.required = (num) => typeof num === this.type; // eslint-disable-line
  }

  positive = () => {
    this.shema.positive = (num) => num >= 0;
    return this;
  }

  range = (start, end) => {
    this.shema.range = (num) => num >= start && num <= end;
  }
}

export default NumberSchema;
