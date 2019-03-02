const request = require('supertest');
const app = require('../src/server/server');

describe('POST /api/handleCost', () => {
  test('It should return the correct totalCost', () => {
    return request(app)
      .post('/api/handleCost')
      .send({ startDate: "2019-03-05", numberOfDays: 5 })
      .set('Accept', 'application/json')
      .expect(200)
      .then((response => {
        expect(response.body.totalCost).toBe("0.25")
      }))
  })
  test('Sending negative number of days should return an error', () => {
    return request(app)
      .post('/api/handleCost')
      .send({ startDate: "2019-03-05", numberOfDays: -5 })
      .set('Accept', 'application/json')
      .expect(400)
      .then((response => {
        expect(response.text).toBe('ERROR! Number of days needs to be 0 or greater')
      }))
  })
  test('Sending undefined as the startDay should return an error', () => {
    return request(app)
      .post('/api/handleCost')
      .send({ startDate: undefined, numberOfDays: 1 })
      .set('Accept', 'application/json')
      .expect(400)
      .then((response) => {
        expect(response.text).toBe('ERROR! Start date or number of days need to be set')
      })
  })
  test('Sending undefined as the numberOfDays should return an error', () => {
    return request(app)
      .post('/api/handleCost')
      .send({ startDate: "2019-03-28", numberOfDays: undefined })
      .set('Accept', 'application/json')
      .expect(400)
      .then((response) => {
        expect(response.text).toBe('ERROR! Start date or number of days need to be set')
      })
  })
});
