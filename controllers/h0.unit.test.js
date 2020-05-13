const request = require('supertest');
const app = require ("../app")

it('Responds with an iconic pop-culture phrase', async () => {
    const res = await request(app).post("/0");
    return expect(res.text).toEqual("It's Britney bitch.") 
    });
