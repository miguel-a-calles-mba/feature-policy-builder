# feature-policy-builder

Feature policy builder.

## Example

```js
const builder = require('feature-policy-builder');

const featurePolicyDirectives = {
    accelerometer: ["'none'"],
    ambientLightSensor: ["'none'"],
    'display-capture': ["'none'"],
};

console.log(`Feature-Policy: ${builder(featurePolicyDirectives)}`);
// Feature-Policy: accelerometer 'none'; ambient-light-sensor 'none'; display-capture 'none'
```
