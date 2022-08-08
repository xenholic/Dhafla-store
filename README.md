# Dhafla-store

Creating a store for your data.

## Installation

```bash
$ npm install --save dhafla-store
```

## Usage

```js
import { Store } from "dhafla-store";

const store = new Store();
```

## API

### Store

```js
new Store();
```

### Store.get

```js
store.get("key");
```

### Store.set

```js
store.set("key", "value");
```

### Store.remove

```js
store.remove("key");
```

## License

BSD-3-Clause

[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
