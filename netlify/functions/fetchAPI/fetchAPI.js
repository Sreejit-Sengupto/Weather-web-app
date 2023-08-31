// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import axios from "axios";
const handler = async (event) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=25.3176&lon=82.9739&appid=${process.env.API_KEY}`
  try {
    const { data} = axios.get(url)
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    }
  }
};

module.exports = { handler };
