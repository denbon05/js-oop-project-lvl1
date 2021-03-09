// @ts-check

import StringSchema from './StringShema';

class Validator {
  string() {
    this.shema = new StringSchema();
    return this.shema;
  }
}

export default Validator;
