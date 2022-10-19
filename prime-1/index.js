import { Worker } from 'worker_threads'
import { __dirname, numberOfWorkers } from '../util.js'

const workers = []
// [threadId, nthPrime]
const result = [-1, -1]
// a number between 1k and 2k
const whichPrime = Math.floor(Math.random() * 1e3) + 1e3

for (let i = 0; i < numberOfWorkers; i++) {
  const worker = new Worker(__dirname(import.meta) + '/worker.js', {
    workerData: {
      result,
      whichPrime
    }
  })

  workers.push(new Promise(resolve => worker.once('exit', resolve)))
}

await Promise.all(workers)

console.log(
  `main thread: worker ${result[0]} calculated ${whichPrime}th prime as ${result[1]}`
)
