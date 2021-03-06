const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);
// make sure the app is listening
app.listen(PORT, ()=> {
  console.log(`App is listening on port ${PORT}`)
})