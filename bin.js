#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const urls = require('./urls')
const findInspirePolygonAreas = require('./index.js')
const offline = argv.offline

function writeToStdout (urls) {
  urls.forEach((url) => console.log(url))
}

if (offline) {
  writeToStdout(urls)
} else {
  findInspirePolygonAreas((err, areas) => {
    if (err) return console.error(err)
    writeToStdout(areas.map((a) => a.url))
  })
}
