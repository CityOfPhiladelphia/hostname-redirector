const NEW_HOSTNAME = 'https://www.phila.website'

exports.handler = async function handler (event) {
  const request = event.Records[0].cf.request
  const pathname = request.uri
  const newUrl = NEW_HOSTNAME + pathname

  console.log(pathname, '->', newUrl)
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
