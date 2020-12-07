import { describe, it, test } from '@robinblomberg/test';
import * as Assert from '../lib/index.js';

test('@robinblomberg/assert', () => {
  describe('doesNotThrow', () => {
    it('should not throw if the function does not throw', () => {
      Assert.doesNotThrow(() => {
        Assert.equal([3], [3]);
      });
      Assert.doesNotThrow(() => {
        Assert.notEqual([3], [4]);
      });
    });

    it('should throw if the function throws', () => {
      let hasThrown = false;

      try {
        Assert.doesNotThrow(() => {
          Assert.equal([3], [4]);
        });
      } catch {
        hasThrown = true;
      }

      if (!hasThrown) {
        throw new Error('Expected function to throw an exception.');
      }
    });
  });

  describe('throws', () => {
    it('should not throw if the function throws', () => {
      Assert.throws(() => {
        Assert.equal([3], [4]);
      });
      Assert.throws(() => {
        Assert.notEqual([3], [3]);
      });
    });

    it('should throw if the function does not throw', () => {
      let hasThrown = false;

      try {
        Assert.throws(() => {
          Assert.equal([3], [3]);
        });
      } catch {
        hasThrown = true;
      }

      if (!hasThrown) {
        throw new Error('Expected function to throw an exception.');
      }
    });
  });
})();
