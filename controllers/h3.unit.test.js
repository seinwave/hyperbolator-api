const request = require('supertest');
const app = require ("../app")

it('Responds with an insult', async () => {
    const res = await request(app).post("/3");
    return expect(res.text).toEqual("Hey you level 3 fuckface.") 
    });
