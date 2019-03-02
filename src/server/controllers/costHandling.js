const redis = require('redis');

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient(REDIS_PORT);

client.on('connect', () => {
  console.log('Connected to Redis...');
});

const costHandling = (req, res, next) => {
  const { startDate, numberOfDays } = req.body;
  if (startDate === undefined || numberOfDays === undefined) {
    return res.status(400).send('ERROR! Start date or number of days need to be set');
  }
  if (numberOfDays === 0) {
    return res.send({ totalCost: '0.00' });
  }
  if (numberOfDays < 0) {
    return res.status(400).send('ERROR! Number of days needs to be 0 or greater');
  }
}