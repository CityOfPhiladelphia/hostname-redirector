exports.handler = async function handler (event) {
  const request = event.Records[0].cf.request
  const hostname = request.headers.host[0].value
  const pathname = request.uri

  const newOrigin = (hostname.endsWith('.website'))
    ? 'https://www.phila.website'
    : 'https://www.phila.gov'

  const newUrl = newOrigin + pathname

  console.log(hostname, pathname, '->', newUrl)
  return createRedirect(newUrl, 301)
}

function createRedirect (newLocation, statusCode) {
  return {
    status: statusCode,
    statusDescription: 'Moved Permanently',
    headers: {
      location: [
        { key: 'Location', value: newLocation }
      ]
    }
  }
}
