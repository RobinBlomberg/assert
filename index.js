const ErrorMessages = require('@kjou/error').Messages
const baseDeepEqual = require('@kjou/utility').deepEqual

const deepEqual = (a, b) => {
  if (!baseDeepEqual(a, b)) {
    throw new Error(ErrorMessages.ValuesNotDeepEqual(a, b))
  }
}

const doesNotThrow = (fn) => {
  try {
    fn()
  } catch (error) {
    throw new Error(ErrorMessages.UnexpectedThrow(error))
  }
}

const equal = (a, b, noun) => {
  if (a !== b) {
    throw new Error(ErrorMessages.ValueMismatch(a, b, noun))
  }
}

const fail = (error) => {
  if (error instanceof Error) {
    throw error
  } else {
    throw new Error(ErrorMessages.AssertionFailed(error))
  }
}

const notDeepEqual = (a, b) => {
  if (baseDeepEqual(a, b)) {
    throw new Error(ErrorMessages.UnexpectedDeepEquality(a))
  }
}

const notEqual = (a, b, noun) => {
  if (a === b) {
    throw new Error(ErrorMessages.UnexpectedMatch(a, noun))
  }
}

const ok = (value, message) => {
  if (!value) {
    fail(message)
  }
}

const throws = (fn, name, message) => {
  try {
    fn()
  } catch (error) {
    if (name && error.name !== name) {
      throw new Error(
        ErrorMessages.ValueMismatch(error.name, name, 'error names')
      )
    }

    if (message && error.message !== message) {
      throw new Error(
        ErrorMessages.ValueMismatch(error.message, message, 'error messages')
      )
    }

    return
  }

  throw new Error(ErrorMessages.DidNotThrow())
}

module.exports = {
  deepEqual,
  doesNotThrow,
  equal,
  fail,
  notDeepEqual,
  notEqual,
  ok,
  throws
}
