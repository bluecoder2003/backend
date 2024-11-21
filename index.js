require('dotenv').config() //This line imports the dotenv module, which is a zero-dependency module that loads environment variables from a .env file into process.env. This allows us to store sensitive information in a .env file and access it in our code.
const express = require('express') //This line imports the Express module, which is a web framework for Node.js, making it easier to handle HTTP requests and responses.

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('bluecoder2003');
  });

  app.get('/login', (req, res) => {
    res.send('<h1>Login</h1>');
  });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
