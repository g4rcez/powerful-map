# PowerfulMap

_A powerful version of WeakMap. Infamous joke, of course_

### Install

```bash
npm i powerful-map
# or
yarn add powerful-map
```

### Using

```typescript
const p = PowerfulMap();

p.set({ object: "0" }, "value0");
p.set({ object: "1" }, "value1");
p.set({ object: "2" }, "value2");
p.set({ object: "3" }, "value3");

p.get({ object: "3" }, "value3") === "value3"; // true
p.has({ object: "3" }); // true
```

### Why PowerfulMap?

Powerful Map use [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) to compare object key as values. But
this method is not perfect for complex objects and not effective to differentiate types in object values (your key).

```typescript
const p = PowerfulMap();

p.set({ object: "0" }, "value0");
p.has({ object: 0 }) // true
```

This case is valid, but if the type is important to your object so you have a bug :D


### ToDo

- [] Performer way to compare keys with reliability on type in values of object
