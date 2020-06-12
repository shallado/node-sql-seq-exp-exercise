const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

app.listen(port, () => console.log(
  `Successfully connected to server on port ${port}`
));