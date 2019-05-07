if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const path = require("path")
const app = express()
const axios = require("axios")

app.get('/bio/search/:query', (request, response) => {
  //axios.get(`https://superheroapi.com/${process.env.HERO_API_KEY}/search/${request.params.query}`)
  axios.get(`https://superheroapi.com/api/${process.env.API_KEY}/search/${request.params.query}`)
    .then(superResponse => response.json(superResponse.data.results || []))
})

app.get('/api/bio/:id', (request, response) => {
  axios.get(`https://superheroapi.com/api/${process.env.API_KEY}/${request.params.id}/biography`)
    .then(superResponse => response.json(superResponse.data))
})

app.get('/api/image/:id', (request, response) => {
  axios.get(`https://superheroapi.com/api/${process.env.API_KEY}/${request.params.id}/image`)
    .then(superResponse => response.json(superResponse.data))
})

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
