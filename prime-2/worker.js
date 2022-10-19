import { workerData, threadId } from 'worker_threads'
import { setTimeout } from 'timers/promises'
import { nthPrime } from '../util.js'

await setTimeout(Math.random() * 100 + 100)

if (workerData.result[0] === -1) {
  workerData.result[0] = threadId

  const prime = nthPrime(workerData.whichPrime)
  workerData.result[1] = prime

  console.log(
    `worker(${threadId}): the ${workerData.whichPrime}th prime is ${prime}`
  )
}
