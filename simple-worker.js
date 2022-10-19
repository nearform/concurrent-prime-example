import { Worker, isMainThread, threadId } from 'worker_threads'

if (isMainThread) {
  // This loads the current file inside a Worker instance.
  console.log('inside main thread')
  new Worker('./simple-worker.js')
} else {
  console.log('inside worker', threadId)
}
