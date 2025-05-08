# TypeScript-Technocrat

## 1. What is type in typescript?
A type is a custom name or shape that describe the data.its reuseable and readable.it Use with primitives data type.basically type use for flexibility.

### Example:

```ts
type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Engineer",
  age: 25,
};
const user2: User = {
  name: "Developer",
  age: 25,
};
```
Now here User is a custom type,user1,user2 must be shape of User.

### Union Types with type :

```ts

type Status = "success" | "error" | "loading";

let response: Status = "success";
```

### Function Type :
```ts

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

## What is interface?

interface is used to define the structure of an object.it Just like type, but intended specifically for object shapes.mostly used for objects and classes.

### Example :
```ts
interface Product {
  name: string;
  price: number;
  description?: string; // optional
  readonly id: number;  // can't change
}
```
### Function with interface
```ts
interface Add {
  (a: number, b: number): number;
}

const add: Add = (x, y) => x + y;
```

## Difference between Type and Interface

- Use : interface for objects and class contracts & type for unions, tuples, primitives, and advanced types.


- Flexibility : type is more flexible than interface.

- Capabilities : type Has fewer capabilities but interface	has more capabilities.


```ts
// With type

type User = {
  name: string;
  age: number;
};

// With interface

interface User {
  name: string;
  age: number;
}
```

## 2. What is the use of the keyof keyword in TypeScript?

keyof is a keyword in TypeScript which is used to extract the key type from an object type.its returns a union of the keys of a given type or interface.

```TS
type TAccount = {
  email: string;
  password: number;
};

type TAccountKeys = keyof TAccount; // Equivalent to: "email" | "password" 
```



## Use case - safe property access function

```ts
let getProperty = <T, K extends keyof T> (obj: T, key: K): T[K] => {
  return obj[key];
}

const user = {
  name: "Safi",
  age: 25,
};

const name = getProperty(user, "name"); // returns string
const age = getProperty(user, "age");   // returns number
```
- Here `extends keyof T`: the **key** must be one of the **keys of `T`**.

- `T[K]`: return type is the **value type** of the **key `K`**.

- This ensures **type safety** and prevents **invalid key access**.


