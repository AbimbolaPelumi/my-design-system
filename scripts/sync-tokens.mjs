import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const ZEROHEIGHT_API_TOKEN = process.env.ZEROHEIGHT_API_TOKEN
const STYLEGUIDE_ID = process.env.ZEROHEIGHT_STYLEGUIDE_ID

if (!ZEROHEIGHT_API_TOKEN || !STYLEGUIDE_ID) {
  console.error('Missing ZEROHEIGHT_API_TOKEN or ZEROHEIGHT_STYLEGUIDE_ID env vars')
  process.exit(1)
}

async function fetchTokens() {
  console.log('Fetching tokens from Zeroheight...')

  const response = await fetch(
    `https://zeroheight.com/api/v0/styleguides/${STYLEGUIDE_ID}/design_tokens/export`,
    {
      headers: {
        Authorization: `Bearer ${ZEROHEIGHT_API_TOKEN}`,
        Accept: 'application/json',
      },
    }
  )

  if (!response.ok) {
    throw new Error(`Zeroheight API error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

async function main() {
  const tokens = await fetchTokens()

  const outputPath = path.resolve('tokens/raw/tokens.json')
  fs.writeFileSync(outputPath, JSON.stringify(tokens, null, 2))
  console.log(`Written to ${outputPath}`)

  console.log('Running Style Dictionary build...')
  execSync('node tokens/config/style-dictionary.config.mjs', { stdio: 'inherit' })
  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})