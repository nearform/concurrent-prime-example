import { workerData, threadId } from 'worker_threads'
import { setTimeout } from 'timers/promises'
import { nthPrime } from '../util.js'

await setTimeout(Math.random() * 100 + 100)

if (Atomics.compareExchange(workerData.result, 0, -1, threadId) === -1) {
  const prime = nthPrime(workerData.whichPrime)
  Atomics.store(workerData.result, 1, prime)

  console.log(`worker(${threadId}): found ${prime}`)
}
