import test from 'ava'
import { sum } from '../library'

test('sum of 1 and 2 should return 3', t => {
  const actualResult = sum(1, 2)
  const expectedResult = 3
  t.is(actualResult, expectedResult)
})

test('sum of test and manual should return 4', t => {
  const actualResult = sum('test', 'manual')
  const expectedResult = 'test manual'
  t.is(actualResult, expectedResult)
})

test('sum of 0.1 and 0.2 should return 0.3', t => {
  const actualResult = sum(0.1, 0.2)
  const expectedResult = 0.3
  t.is(actualResult, expectedResult)
})

// Integration Testing

test('returns 🌞 when it is 35 degrees', async t => {
  t.context.sinon = sinon.createSandbox()
  t.context.sinon.stub(weatherAPI, 'getTemperature')
                  .callsFake(async () => { temp: 35 })
  const weatherEmojiRes = await meetupApp.weatherEmoji()
  t.is(weatherEmojiRes.body.emoji, '🌞')
})


const weatherAPI = require('accuweather')

weatherEmoji() {
  const temp = weatherAPI.getTemperature()
  if (temp > 30) return '🌞'
  else return `:'(`
}


 
//End-to-End Testing

test('Create new person', async t => {
  const personToCreat = [name: '']
})
