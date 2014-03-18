
# co-event

  Return any event that an emitter emits.

## Installation

```
$ npm install co-event
```

## Example

 Returns events in sequence, with the `.type` and `.args` keys.

```js
var event = require('co-event');

var e;
while (e = yield event(emitter)) {
  switch (e.type) {
    case 'end':
      break;

    case 'close':
      break;

    case 'error':
      break;
  }
}
```

# License

  MIT