// @ts-check

import { describe, expect, test } from '@jest/globals';
import Validator from '../src/Validator';

describe('Check validator', () => {
  test('validate string', () => {
    const v = new Validator();
    const schema = v.string();

    expect(schema.isValid('')).toBeTruthy();

    schema.required();
    schema.minLength(4);

    expect(schema.isValid('what does the fox say')).toBeTruthy();
    expect(schema.isValid('hexlet')).toBeTruthy();
    expect(schema.isValid(null)).toBeFalsy();
    expect(schema.isValid('')).toBeFalsy();
    expect(schema.contains('what').isValid('what does the fox say')).toBeTruthy();
    expect(schema.contains('whatthe').isValid('what does the fox say')).toBeFalsy();
  });

  test('validate number', () => {
    const v = new Validator();

    const schema = v.number();

    expect(schema.isValid(null)).toBeTruthy();

    schema.required();

    expect(schema.isValid(null)).toBeFalsy();
    expect(schema.isValid(7)).toBeTruthy();

    schema.range(-5, 5);

    expect(schema.isValid(-3)).toBeTruthy();
    expect(schema.isValid(5)).toBeFalsy();
    expect(schema.positive().isValid(4)).toBeTruthy();
  });
});
