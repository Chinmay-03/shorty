//load all redirects.yml
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsfile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8')
const redirects = YAML.parse(redirectsfile)


console.log(redirects)
// generate an html page for each redirect url from template.html