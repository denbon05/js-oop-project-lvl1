// @ts-check

import StringSchema from './shemas/StringShema';
import NumberSchema from './shemas/NumberSchema';
import ArraySchema from './shemas/ArraySchema';
import ObjectSchema from './shemas/ObjectSchema';

class Validator {
  shema = null;

  isValid = (arg) => this.shema.isValid(arg);

  string = () => {
    this.shema = new StringSchema();
    return this.shema;
  };

  number = () => {
    this.shema = new NumberSchema();
    return this.shema;
  };

  array = () => {
    this.shema = new ArraySchema();
    return this.shema;
  }

  object = () => {
    this.shema = new ObjectSchema();
    return this.shema;
  }

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

  sizeof = (size) => {
    this.shema.sizeof(size);
    return this.shema;
  };

  shape = (obj) => {
    this.shema.shape(obj);
    return this.shema;
  };
}

export default Validator;
