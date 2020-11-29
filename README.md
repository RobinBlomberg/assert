# Schema

## Installation

```
npm install --save-dev @robinblomberg/schema
```

## Usage

```javascript
const config = s.object({
  ignorePatterns: s.array(s.string()),
  rules: s.object({
    indent: s.array([
      s.number(),
      s.number(),
      s.object({
        SwitchCase: s.number()
      })
    ])
  })
});

config.validate({
  ignorePatterns: ['**/.*/**'],
  rules: {
    indent: [1, 2, {
      SwitchCase: '1'
    }]
  }
})
// SchemaValidationError (`Type '"1"' is not assignable to type 'number'.`)
```
