# Assert

## Installation

```
npm install --save-dev @robinblomberg/assert
```

## Usage

```javascript
import * as Assert from '@robinblomberg/assert';

Assert.equal([3], [4]);
// Error:
//
// Type '[4]' is not assignable to type '[3]'.
// Type '4' is not assignable to type '3'.
```
