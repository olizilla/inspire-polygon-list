const https = require('https')
const cheerio = require('cheerio')

function fetchIndexHtml (cb) {
  const req = https.get('https://www.gov.uk/government/collections/download-inspire-index-polygons', (res) => {
    let data = ''
    res
      .on('data', (d) => { data += d })
      .on('end', () => cb(null, data.toString()))
  })
  req.on('error', cb)
}

function findInspirePolygonAreas (cb) {
  fetchIndexHtml((err, data) => {
    if (err) return cb(err)
    const $ = cheerio.load(data)
    const areas = $('.group-document-list-item-title a')
      .toArray()
      .map((node) => node.firstChild.data)
      .map((name) => name.split('INSPIRE')[0].trim())
      .map((name) => {
        const filename = nameToFilename(name)
        const url = `http://data.inspire.landregistry.gov.uk/${filename}`
        return { name, url, filename }
      })
    cb(err, areas)
  })
}

function nameToFilename (name) {
  return `${name.replace(/ /g, '_')}.zip`
}

module.exports = findInspirePolygonAreas
