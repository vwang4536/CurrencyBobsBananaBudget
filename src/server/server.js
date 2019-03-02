const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const costHandling = require('./controllers/costHandling');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../../dist')));

// invokes costHandling to figure out totalCost and sends as response
app.post('/api/handleCost', costHandling, (req, res) => {
  res.send({ totalCost: Number(res.locals.totalCost).toFixed(2) });
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

module.exports = app;
