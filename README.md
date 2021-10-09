# slurp-uri

Reads the contents of a URI into a
[Buffer](https://nodejs.org/api/buffer.html#buffer_buffer) or string.

(Because I got tired of gluing [get-uri](https://www.npmjs.com/package/get-uri)
to [stream-to-array](https://www.npmjs.com/package/stream-to-array)).

# Usage

```javascript
const slurpUri = require('@shieldsbetter/slurp-uri');

async function main() {
    console.log(await slurpUri('data:,hello world'));
}
```

# Options

A second parameter may be passed containing options. Supported options:

* `encoding` - (Optional) If specified, the URI's bytes will be decoded and
  returned as a string with the specified encoding. If omitted, the raw
  [Buffer](https://nodejs.org/api/buffer.html#buffer_buffer) will be returned.
* `getUriOptions` - (Optional - default `{}`) Passed verbatim to `get-uri`.
