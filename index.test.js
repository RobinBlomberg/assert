import { doesNotThrow, equal, notEqual, throws } from './src/functions.js';

doesNotThrow(() => {
  equal([3], [3]);
});
doesNotThrow(() => {
  notEqual([3], [4]);
});
throws(() => {
  equal([3], [4]);
});
throws(() => {
  notEqual([3], [3]);
});
