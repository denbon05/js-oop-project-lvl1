// @ts-check

import StringSchema from './shemas/StringShema';
import NumberSchema from './shemas/NumberSchema';

class Validator {
  shema = null;

  type = null;

  isValid = (arg) => this.shema.isValid(arg);

  string = () => {
    this.type = 'string';
    this.shema = new StringSchema();
    return this.shema;
  };

  number = () => {
    this.type = 'number';
    this.shema = new NumberSchema();
    return this.shema;
  };

  required = () => {
    this.shema.required();
    return this.shema;
  };

  contains = (substr) => {
    this.shema.contains(substr);
    console.log('this.shema=>', this.shema);
    return this.shema;
  };

  minLength = (len) => {
    this.shema.minLength(len);
    return this.shema;
  };

  positive = () => {
    this.shema.positive();
    return this.shema;
  };

  range = (start, end) => {
    this.shema.range(start, end);
    return this.shema;
  };
}

export default Validator;
