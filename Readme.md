
# co-event

  Return any event that an emitter emits.

## Installation

```
$ npm install co-event
```

## Example

 Returns events in sequence, with the `.type` and `.args` keys. The original events are still emitted except for "error", as node will think no handler is registered.

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