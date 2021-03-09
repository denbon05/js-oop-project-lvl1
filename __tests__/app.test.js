// @ts-check

import { describe, expect, test } from '@jest/globals';
import Validator from '../src/Validator';

describe('Check validator', () => {
  test('validate string', () => {
    const v = new Validator();
    const schema = v.string();

    expect(schema.type).toBe('string');
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

    expect(schema.type).toBe('number');
    expect(schema.isValid(null)).toBeTruthy();

    schema.required();

    expect(schema.isValid(null)).toBeFalsy();
    expect(schema.isValid(7)).toBeTruthy();

    schema.range(-5, 5);

    expect(schema.isValid(-6)).toBeFalsy();
    expect(schema.isValid(5)).toBeTruthy();
    expect(schema.positive().isValid(4)).toBeTruthy();
  });

  test('validate array', () => {
    const v = new Validator();

    const schema = v.array();

    expect(schema.isValid(null)).toBeFalsy();

    schema.required();

    expect(schema.isValid([])).toBeTruthy();
    expect(schema.isValid(['hexlet'])).toBeTruthy();

    schema.sizeof(2);

    expect(schema.isValid(['hexlet'])).toBeFalsy();
    expect(schema.isValid(['hexlet', 'code-basics'])).toBeTruthy();
  });

  test('validate shape', () => {
    const v = new Validator();

    const schema = v.object();

    // Позволяет описывать валидацию для свойств объекта
    schema.shape({
      name: v.string().required(),
      age: v.number().positive(),
    });

    expect(schema.isValid({ name: 'kolya', age: 100 })).toBeTruthy();
    expect(schema.isValid({ name: 'maya', age: null })).toBeTruthy();
    expect(schema.isValid({ name: '', age: null })).toBeFalsy();
    expect(schema.isValid({ name: 'ada', age: -5 })).toBeFalsy();
  });
});
