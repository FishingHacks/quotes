# quotes

Gives you a Random quote

Usage:


To define Quotes, edit data/quotes.json

To get quotes, use
```js
require("./quotes").getRandomQuote()
```

## The Quote Class
A new instance of the Quote class will be returned by calling #getRandomQuote(). It has only one function: toString(options).

options:
```ts
interface toStringOptions {
    author?: boolean=true
}
```