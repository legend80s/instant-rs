// 1337000000 => 'time costs 15d 11h 23m 20s'
// 1337ms => 'time costs 1.3s'
// 133 => 'time costs 133ms'
import {
  test
} from 'node:test'
import assert from 'node:assert'
import timers from "node:timers/promises";

import Instant from '../index.js'

test('doc-test in README', async (t) => {
  await t.test('ms', async () => {
    const now = Instant.now();

    await sleep(133)

    assert.match(now.elapsed(), /13[3-9]ms/);
  })

  await t.test('s', async () => {
    const now = Instant.now();

    await sleep(1337)

    assert.equal(now.elapsed(), '1.3s');
  })

  await t.test('6ms', async () => {
    const now = Instant.now();

    await sleep(6)

    assert.match(now.elapsed(), /[5-9]ms/);
  })

  await t.test('10ms', async () => {
    const now = Instant.now();

    await sleep(10)

    assert.match(now.elapsed(), /1[0-5]ms/);
  })

  await t.test('100ms', async () => {
    const now = Instant.now();

    await sleep(100)

    assert.match(now.elapsed(), /10[0-5]ms/);
  })

  await t.test('1000ms', async () => {
    const now = Instant.now();

    await sleep(1000)

    assert.equal(now.elapsed(), '1s');
  })

  await t.test('1234 ms => 1.2s', async () => {
    const now = Instant.now();

    await sleep(1234)

    assert.equal(now.elapsed(), '1.2s');
  })

  await t.test('1234 ms => 1.2 seconds when verbose true', async () => {
    const now = Instant.now();

    await sleep(1234)

    assert.equal(now.elapsed({
      verbose: true
    }), '1.2 seconds');
  })
});

/** @param {number} ms */
function sleep(ms) {
  return timers.setTimeout(ms)
}
