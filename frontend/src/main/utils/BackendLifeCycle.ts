// const {exec} = require('child_process')
import { exec } from 'child_process'

export function startBackend() {
  exec('echo started >> ~/backend.runner')
}

export function stopBackend() {
  exec('echo stopped >> ~/backend.runner')
}
