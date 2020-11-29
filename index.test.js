import * as Assert from './index.js';

Assert.doesNotThrow(() => {
  Assert.equal([3], [3]);
});
Assert.doesNotThrow(() => {
  Assert.notEqual([3], [4]);
});
Assert.throws(() => {
  Assert.equal([3], [4]);
});
Assert.throws(() => {
  Assert.notEqual([3], [3]);
});
