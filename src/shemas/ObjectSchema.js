// @ts-check

export default class ObjectSchema {
  shema = {};

  isValid = (obj) => {
    const errors = Object.entries(obj)
      .map(([key, value]) => this.shema[key].isValid(value))
      .filter((val) => val === 'error' || !val);
    return errors.length === 0;
  };

  shape = (shemaObj) => {
    this.shema = { ...this.shema, ...shemaObj };
  };
}
