const ErrorMessages = require('@kjou/error').Messages
const {
  deepEqual,
  doesNotThrow,
  fail,
  notDeepEqual,
  ok,
  throws
} = require('..')

const describe = (description, test) => {
  return test()
}

const it = (description, test) => {
  return test()
}

describe('deepEqual', () => {
  it('should not throw an error if the values are deeply equal', () => {
    try {
      deepEqual({ foo: 'bar' }, { foo: 'bar' })
    } catch (err) {
      throw new Error(ErrorMessages.UnexpectedThrow())
    }
  })

  it('should throw an error if the values are not deeply equal', () => {
    let error

    try {
      deepEqual({ foo: 'bar' }, { foo: 'qux' })
    } catch (err) {
      error = err
    }

    if (!error) {
      throw new Error(ErrorMessages.DidNotThrow())
    }
  })
})

describe('notDeepEqual', () => {
  it('should throw an error if the values are deeply equal', () => {
    try {
      notDeepEqual({ foo: 'bar' }, { foo: 'bar' })
    } catch (err) {
      deepEqual(
        err.message,
        ErrorMessages.UnexpectedDeepEquality({ foo: 'bar' })
      )
    }
  })

  it('should not throw an error if the values are not deeply equal', () => {
    try {
      notDeepEqual({ foo: 'bar' }, { foo: 'qux' })
    } catch (err) {
      throw new Error(ErrorMessages.UnexpectedThrow())
    }
  })
})

describe('throws', () => {
  it('should not throw if the function throws', () => {
    try {
      throws(() => {
        throw new Error('foo')
      })
    } catch (error) {
      throw new Error(ErrorMessages.UnexpectedThrow(error))
    }
  })

  it('should throw if the function does not throw', () => {
    try {
      throws(() => {})
    } catch (error) {
      return
    }

    throw new Error(ErrorMessages.DidNotThrow())
  })
})

describe('doesNotThrow', () => {
  it('should throw if the function throws', () => {
    try {
      doesNotThrow(() => {
        throw new Error('foo')
      })
    } catch (error) {
      return
    }

    throw new Error(ErrorMessages.DidNotThrow())
  })

  it('should not throw if the function does not throw', () => {
    try {
      doesNotThrow(() => {})
    } catch (error) {
      throw new Error(ErrorMessages.UnexpectedThrow())
    }
  })
})

describe('fail', () => {
  it('should be able to throw without a custom message', () => {
    throws(() => {
      fail()
    }, 'Error', ErrorMessages.AssertionFailed())
  })

  it('should be able to throw with a custom message', () => {
    throws(() => {
      fail('Number is too high.')
    }, 'Error', ErrorMessages.AssertionFailed('Number is too high.'))
  })
})

describe('ok', () => {
  it('should be able to assert without a custom message', () => {
    throws(() => ok())
    throws(() => ok(false))
    doesNotThrow(() => ok(1))
    doesNotThrow(() => ok(true))
  })

  it('should be able to assert with a custom message', () => {
    throws(() => ok(false, 'test'), null, ErrorMessages.AssertionFailed('test'))
  })
})
