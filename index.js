//load all redirects.yml
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectsfile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8')
const redirects = YAML.parse(redirectsfile)


console.log(redirects)
// generate an html page for each redirect url from template.html

const templateHTML = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8')


// loop through all url redirects and generate an html page

for (let [slug, url] of Object.entries(redirects)) {
    console.log('Generating HTML Page for',slug)

    const html = templateHTML.replaceAll('https://example.com', url)    
    console.log(html)
}
