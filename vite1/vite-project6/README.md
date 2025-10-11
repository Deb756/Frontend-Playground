# Project : Todo App

## Topic covereded : Context Api , LocalStorage

1. `Localstorage in react`

   - Properties & methods()

     - The **`length`** read-only property of the `Storage` object.
     - `readonly length: number;`
     - The **`clear()`** method of the Storage interface clears all keys stored in a given `Storage` object.
     - `clear(): void;`
     - The **`getItem()`** method of the Storage interface, when passed a key name, will return that key's value, or `null` if the key does not exist, in the given `Storage` object.
     - `getItem(key: string): string | null;`

     - The **`key()`** method of the Storage interface, when passed a number n, returns the name of the nth key in a given `Storage` object.
     - `key(index: number): string | null;`
     - The **`removeItem()`** method of the Storage interface, when passed a key name, will remove that key from the given `Storage` object if it exists.
     - `removeItem(key: string): void;`
     - The **`setItem()`** method of the Storage interface, when passed a key name and value, will add that key to the given `Storage` object, or update that key's value if it already exists.
     - `setItem(key: string, value: string): void;[name: string]: any;`

2. `Examples.`

- `localStrorage.getItem(key: string)`

  ```jsx
  JSON.parse(localStorage.getItem("TodosArr"));
  ```

- `localStrorage.setItem(key: string, value: string)`

  ```jsx
  localStorage.setItem("TodosArr", JSON.stringify(currTodos));
  ```
