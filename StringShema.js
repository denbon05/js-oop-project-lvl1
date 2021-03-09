class StringSchema {
  shema = {
    type: (arg) => typeof arg === 'string',
    require: null,
    content: null,
  }

  isValid(arg) {
    const errors = [];
    Object.values(this.shema).forEach((value) => {
      if (value) {
        if (!value(arg)) errors.push(false);
      }
    });
    return errors.length === 0;
  }

  required() {
    this.shema.require = (arg) => (arg ? arg.length > 0 : false);
    return this;
  }

  contains(substr) {
    this.shema.content = (text) => text.includes(substr);
    return this;
  }
}

export default StringSchema;
