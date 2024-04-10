# instant-rs

<p>
  <a href="https://www.npmjs.com/package/instant-rs" target="_blank">
    <img src="https://img.shields.io/npm/v/instant-rs.svg" alt="npm version" />
  </a>

  <a href="https://www.npmjs.com/package/instant-rs">
    <img src="https://img.shields.io/npm/dm/instant-rs.svg" alt="npm downloads" />
  </a>

  <a href="https://www.npmjs.com/package/git-commit-msg-linter" target="_blank">
    <img alt="lint by git commit msg linter" src="https://img.shields.io/badge/git-commit%20msg%20li
nter-blue" />
  </a>
</p>

> A better `console.time`.
>
> 💰 Time is money, a very tiny library to convert time costs of your program to a **human readable** format use [pretty-ms](https://www.npmjs.com/package/pretty-ms) and designed in a **good-DX API style like Rust's** 🦀  `instant.elapsed`.

## Usage

```js
import Instant from 'instant-rs'

const now = Instant.now();
await doSthExpensive()
console.log("time costs", now.elapsed());
```

`elapsed()` will return the time costs of `doSthExpensive()` in a readable string format.

```js
1337000000 => 'time costs 15d 11h 23m 20s'
1337 => 'time costs 1.3s'
133 => 'time costs 133ms'
```

## The `console.time` Problem

In JavaScript:

```js
console.time('time costs')
await sleep(10) // 10ms 100ms 1000ms
console.timeEnd('time costs')

// Output:
// time costs: 11.322021484375 ms 😀
// time costs: 1001.489990234375 ms 🤔
// time costs: 100102.08911132812 ms 😡
```

While in Rust, time costs is more readable and the API is easier to use and the code is more DRY because we don't need to write label twice:

```rust
use std::time::{Duration, Instant};
use std::thread::sleep;

fn main() {
    let now = Instant::now();
    sleep(Duration::from_millis(10)); // 10ms 100ms 1000ms
    println!("time costs {:?}", now.elapsed());
}

// Output:
// time costs 10.07827ms // 10 ms 😀
// time costs 100.077897ms // 100 ms 😊
// time costs 1.000184719s // 1000 ms 😋
// time costs 10.000086342s // 10_000 ms 😇
```

That's why I wrote this package.

## API

### elapsed

```typescript
function elapsed(options?: IOptions)
```

Support all options of pretty-ms https://www.npmjs.com/package/pretty-ms#api.

for example time cost is `1234ms`:

```js
// `compact` option
now.elapsed({ compact: true });
//=> '1s'

// `verbose` option
now.elapsed({ compact: true });
//=> '1.2 seconds'
```

### now

```typescript
function now(): Instant
```
