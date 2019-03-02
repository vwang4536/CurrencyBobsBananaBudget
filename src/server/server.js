const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/handleCost', (req, res) => {
  res.send({ totalCost: Number(res.locals.totalCost) });
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

module.exports = app;
