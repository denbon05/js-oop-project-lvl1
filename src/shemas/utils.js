// @ts-check

export default (shema, arg) => Object.values(shema).reduce((errors, func) => {
  if (func) {
    if (!func(arg)) return [...errors, 'error'];
  }
  return errors;
}, []);
