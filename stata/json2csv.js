

const items = [{},{}]
const replacer = (key, value) => value === null ? '' : value
const header = Object.keys(items[0])
let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
csv.unshift(header.join(','))
csv = csv.join('\r\n')

const fs = RNFetchBlob.fs
fs.createFile('~/Documents/test.csv', csv, 'utf8')

RNFetchBlob.fs.writeFile('~/Documents/test.csv', csv, 'utf8').then(()=> )