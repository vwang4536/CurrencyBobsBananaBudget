const redis = require('redis');

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient(REDIS_PORT);

client.on('connect', () => {
  console.log('Connected to Redis...');
});

const costHandling = (req, res, next) => {
  let { startDate, numberOfDays } = req.body;
  numberOfDays = Number(numberOfDays);
  if (startDate === undefined || Number.isNaN(numberOfDays)) {
    return res.status(400).send('ERROR! Start date or number of days need to be set');
  }
  if (numberOfDays === 0) {
    return res.send({ totalCost: '0.00' });
  }
  if (numberOfDays < 0) {
    return res.status(400).send('ERROR! Number of days needs to be 0 or greater');
  }
  const start = new Date(startDate);
  const key = JSON.stringify([startDate, numberOfDays]);
  client.get(key, (err, data) => {
    if (!data) {
      const copy = new Date(startDate);
      let totalCost = 0;
      for (let i = 0; i < numberOfDays; i += 1) {
        let current = copy.setDate(start.getDate() + i);
        current = new Date(current);
        if (current.getDay() >= 1 && current.getDay() <= 5) {
          if (current.getDate() <= 7) totalCost += 0.05;
          if (current.getDate() > 7 && current.getDate() <= 14) totalCost += 0.10;
          if (current.getDate() > 14 && current.getDate() <= 21) totalCost += 0.15;
          if (current.getDate() > 21 && current.getDate() <= 28) totalCost += 0.20;
          if (current.getDate() > 28) totalCost += 0.25;
        }
      }
      console.log(typeof totalCost)
      client.set(key, totalCost);
      res.locals.totalCost = totalCost;
      console.log(res.locals.totalCost)
      next();
    } else {
      res.locals.totalCost = data;
      next();
    }
  });
};

module.exports = costHandling;
