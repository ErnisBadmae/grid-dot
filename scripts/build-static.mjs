import { spawnSync } from 'node:child_process'

const result = spawnSync(process.execPath, ['./node_modules/next/dist/bin/next', 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NEXT_OUTPUT_MODE: 'export',
  },
})

if (typeof result.status === 'number') {
  process.exit(result.status)
}

process.exit(1)
