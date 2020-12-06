import * as Schema from '@robinblomberg/schema';

/**
 * @param {Function} fn
 * @throws {Error}
 */
export const doesNotThrow = (fn) => {
  try {
    fn();
  } catch {
    throw new Error('Function unexpectedly threw an exception.');
  }
};

/**
 * @param {*} a
 * @param {*} b
 */
export const equal = (a, b) => {
  const error = Schema.infer(a).validate(b);

  if (error) {
    throw new Error(`\n\n${error.toString()}\n`);
  }
};

/**
 * @param {*} a
 * @param {*} b
 */
export const notEqual = (a, b) => {
  const schema = Schema.infer(a);
  const error = schema.validate(b);

  if (!error) {
    throw new Error(`\n\nExpected values to not be equal:\n\n${schema.stringify()}\n`);
  }
};

/**
 * @param {Function} fn
 * @throws {Error}
 */
export const throws = (fn) => {
  try {
    fn();
  } catch {
    return;
  }

  throw new Error('Expected function to throw an exception.');
};
