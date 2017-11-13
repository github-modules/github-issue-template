#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const open = require('open')
const url = require('url')
const isUrl = require('is-url')
const argv = require('yargs').argv

if (argv.repo && argv.title && argv.body) {
  const issueURL = url.format({
    protocol: 'https',
    host: 'github.com',
    pathname: `${argv.repo}/issues/new`,
    query: {
      title: argv.title,
      body: argv.body
    }
  })
  process.stdout.write(issueURL)
  if (isUrl(issueURL)) open(issueURL)
  process.exit()
}

console.log(`
Usage: github-issue-template --repo sally/project --title new thing --body $(cat path/to/body.md)`
)
