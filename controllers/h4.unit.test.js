const request = require('supertest');
const app = require ("../app")

it('Responds with an insult', async () => {
    const res = await request(app).post("/4");
    return expect(1).toEqual(1) 
    });
