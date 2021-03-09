// @ts-check

import { describe, expect, test } from '@jest/globals';
import Validator from '../Validator';

describe('Check validator', () => {
  test('validate string', () => {
    const v = new Validator();
    const schema = v.string();

    expect(schema.isValid('')).toBeTruthy();

    schema.required();

    expect(schema.isValid('what does the fox say')).toBeTruthy();
    expect(schema.isValid('hexlet')).toBeTruthy();
    expect(schema.isValid(null)).toBeFalsy();
    expect(schema.isValid('')).toBeFalsy();

    expect(schema.contains('what').isValid('what does the fox say')).toBeTruthy();
    expect(schema.contains('whatthe').isValid('what does the fox say')).toBeFalsy();
  });
});
