// @ts-check

import validate from './utils';

class StringSchema {
  shema = {
    required: null,
    content: null,
    minLength: null,
  }

  isValid = (arg) => {
    if (typeof arg !== 'string') return false;
    const errors = validate(this.shema, arg);
    return errors.length === 0;
  }

  required = () => {
    this.shema.required = (arg) => arg.length > 0;
  }

  contains = (substr) => {
    this.shema.content = (text) => text.includes(substr);
    return this;
  }

  minLength = (len) => {
    this.shema.minLength = (str) => str.length >= len;
  }
}

export default StringSchema;
