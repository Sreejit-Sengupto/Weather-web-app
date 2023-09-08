# SkyVue
![image](https://github.com/Sreejit-Sengupto/Weather-web-app/assets/69980616/03afbb4e-7483-4e90-b941-7c99aeb426ba)

Weather app powered by OpenWeather and created with React and Tailwind provides you with: 
- Current weather data
- 5 days future predictions
- Air Quality information.

# How to run the project locally
### Note: The app has separate backend (https://github.com/Sreejit-Sengupto/Weather-app-backend)
1. Clone the project (Fork if you want to raise a PR).
2. Run `npm install` to install the necessary dependencies.
3. `npm run dev`. The app is running on your local host.
4. #### To use your own API key:
  - Clone the backend.
  - Create a new file named env.js
  - Inside env.js paste the following code `const process = {
    env: {
        API_KEY: 'YOUR_API_KEY'
    }
}
module.exports = process;`
- Paste your api key
- In the frontend code replace all the fetch request url with localhost:5000 (Note: Just change the render.com url and don't replace the entire url)
- Open terminal and run `node server.js`
- The server is running of port 5000
