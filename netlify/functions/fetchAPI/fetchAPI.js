// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    // const subject = event.queryStringParameters.name || 'World'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${event.latitude}&lon=${event.longitude}&appid=${process.env.API_KEY}`)
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: response.data }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
