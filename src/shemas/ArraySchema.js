// @ts-check

import validate from './utils';

class ArraySchema {
  type = 'array';

  shema = {
    size: null,
    required: null,
  };

  isValid = (arg) => {
    if (!Array.isArray(arg)) return false;
    const errros = validate(this.shema, arg);
    return errros.length === 0;
  };

  sizeof = (size) => {
    this.shema.size = (arr) => arr.length === size;
  };

  required = () => {
    this.shema.required = (arr) => Array.isArray(arr);
  };
}

export default ArraySchema;
