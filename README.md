# mongo-roid

*A NodeJS module for creating MongoDB ObjectIDs that are very hard to guess*

---

## Installation

Installation is easy. Simply issue the NPM install command:

```$ npm install mongo-roid```


## Usage

Usage is almost as easy as installation.

```javascript
var randomOID = require('mongo-roid').generate();
console.log(randomOID);
// c890b62475f442608613faac
```


## Dependencies

This module will auto-install the following dependencies

 * [uuid](https://www.npmjs.com/package/uuid)
