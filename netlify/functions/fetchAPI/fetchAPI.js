// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import axios from "axios";
const handler = async (event) => {
  // try {
  //   // const subject = event.queryStringParameters.name || 'World'
  //   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=25.3176&lon=82.9739&appid=${process.env.API_KEY}`)
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ message: response.json() }),
  //     // body: JSON.stringify({ message: `Hello ${subject}` }),
  //     // // more keys you can return:
  //     // headers: { "headerName": "headerValue", ... },
  //     // isBase64Encoded: true,
  //   }
  // } catch (error) {
  //   return { statusCode: 500, body: error.toString() }
  // }

  const apiKey = process.env.API_KEY;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=25.3176&lon=82.9739&appid=${apiKey}`)
    .then(response => {
      return response
    })
    .catch(error => console.log(error))
};

module.exports = { handler };
