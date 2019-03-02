const redis = require('redis');

// create a Redis cache given a REDIS_PORT
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient(REDIS_PORT);

// connecting to Redis server
client.on('connect', () => {
  console.log('Connected to Redis...');
});

// controller to handle total cost based on starting date and number of days
const costHandling = (req, res, next) => {
  let { startDate, numberOfDays } = req.body;
  numberOfDays = Number(numberOfDays);
  // handle edge cases for inputs
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
  // stringify an array consisting of an array of the startDate and numberOfDays to be stored
  // as a key in the cache
  const key = JSON.stringify([startDate, numberOfDays]);
  // check the cache to see if there is an inputted key, if there is then return the data; if
  // not then go through algorithm to find total cost, store key and total cost into cache and
  // return the result
  client.get(key, (err, data) => {
    // if data pertaining to the key does not exist in the cache go through
    // algorithm to figure out totalCost
    if (!data) {
      const copy = new Date(startDate);
      let totalCost = 0;
      for (let i = 0; i < numberOfDays; i += 1) {
        // 1 is added to the end as it initializes to the day
        let current = copy.setDate(start.getDate() + i + 1);
        current = new Date(current);
        // check if the current day is Monday - Friday as Bob only buys bananas on the weekdays
        if (current.getDay() >= 1 && current.getDay() <= 5) {
          // checks if the date is within each week and increment totalCost based on the week
          // week1=0.05, week2=0.1, week3=0.15, week4=0.2, last remaining days=0.25
          if (current.getDate() <= 7) totalCost += 0.05;
          if (current.getDate() > 7 && current.getDate() <= 14) totalCost += 0.10;
          if (current.getDate() > 14 && current.getDate() <= 21) totalCost += 0.15;
          if (current.getDate() > 21 && current.getDate() <= 28) totalCost += 0.20;
          if (current.getDate() > 28) totalCost += 0.25;
        }
      }
      // cache totalCost pertaining to that startDate and numberOfDays
      client.set(key, totalCost);
      res.locals.totalCost = totalCost;
      next();
    } else {
      // totalCost pertaining to the startDate and numberOfDays is found in the cache
      res.locals.totalCost = data;
      next();
    }
  });
};

module.exports = costHandling;
