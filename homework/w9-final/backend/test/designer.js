import test from 'ava'
import request from 'supertest'
import app from '../app'

// TESTS to DO!!!
//
// too many unhandled promises!?

// crashing nyc ava --verbose ($ npm run test-coverage)

// ✖ Create new designer Rejected promise returned by test
// ✖ set full Name Rejected promise returned by test
// ✖ Create new user Rejected promise returned by test

// Rejected promise returned by test. Reason:

// Error {
//   code: 'ECONNRESET',
//   response: undefined,
//   message: 'socket hang up',
// }

// refactor Routes with try/catch
// hmm what else!?

// ----------------------|----------|----------|----------|----------|-------------------|
// File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
// ----------------------|----------|----------|----------|----------|-------------------|
// All files             |    64.57 |      100 |    18.18 |    64.57 |                   |
//  w6-testing           |    95.65 |      100 |       50 |    95.65 |                   |
//   app.js              |    94.74 |      100 |        0 |    94.74 |                25 |
//   mongo-connection.js |      100 |      100 |      100 |      100 |                   |
//  w6-testing/models    |       80 |      100 |    33.33 |       80 |                   |
//   designer.js         |    71.43 |      100 |    33.33 |    71.43 |       56,60,63,65 |
//   location.js         |      100 |      100 |      100 |      100 |                   |
//   skill.js            |      100 |      100 |      100 |      100 |                   |
//   user.js             |    71.43 |      100 |    33.33 |    71.43 |       30,34,37,39 |
//  w6-testing/routes    |     49.4 |      100 |    10.53 |     49.4 |                   |
//   designer.js         |    48.28 |      100 |    16.67 |    48.28 |... 34,38,39,40,41 |
//   location.js         |       50 |      100 |        0 |       50 |... 14,18,19,23,24 |
//   skill.js            |       50 |      100 |        0 |       50 |... 14,18,19,23,24 |
//   user.js             |       50 |      100 |       20 |       50 |... 25,29,30,31,33 |
//  w6-testing/services  |    62.07 |      100 |    16.67 |    62.07 |                   |
//   base-service.js     |       40 |      100 |       25 |       40 |           3,11,15 |
//   designer-service.js |    33.33 |      100 |        0 |    33.33 |... 12,16,17,18,19 |
//   location-service.js |      100 |      100 |      100 |      100 |                   |
//   skill-service.js    |      100 |      100 |      100 |      100 |                   |
//   user-service.js     |      100 |      100 |      100 |      100 |                   |
// ----------------------|----------|----------|----------|----------|-------------------|

// /////////////
// DESIGNER TESTS

// test('Create new designer', async t => {
//   t.plan(3)
//   const designerToCreate = {
//     name: { firstName: 'Lady', lastName: 'Lay' },
//     email: 'zacmee@hotmail.com',
//     website: 'lady.lay',
//     location: [],
//     skills: []
//   }

//   const res = await request(app)
//     .post('/designer')
//     .send(designerToCreate)

//   t.is(res.status, 200)
//   t.is(res.body.name, designerToCreate.name)
//   t.is(res.body.email, designerToCreate.email)
//   t.is(res.body.website, designerToCreate.website)
// })

// test('set full Name', async t => {
//   t.plan(3)
//   const fullNameToSet = 'Bob Dylan'
//   const splitName = fullNameToSet.split(' ')

//   const res = await request(app)
//     .post('/designer')
//     .send(fullNameToSet)

//   t.is(res.status, 200)
//   t.is(res.body.firstName, splitName[0])
//   t.is(res.body.lastName, splitName[1])
// })

// // //////////
// // USER TESTS

// test('Create new user', async t => {
//   t.plan(3)
//   const userToCreate = {
//     name: { firstName: 'Boo', lastName: 'Haha' },
//     email: 'real@email.com',
//     website: 'boo.haha',
//     location: [],
//     skills: []
//   }

//   const res = await request(app)
//     .post('/user')
//     .send(userToCreate)

//   t.is(res.status, 200)
//   t.is(res.body.name, userToCreate.name)
//   t.is(res.body.email, userToCreate.email)
//   t.is(res.body.website, userToCreate.website)
// })
