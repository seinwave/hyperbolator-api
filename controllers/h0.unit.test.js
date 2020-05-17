const request = require("supertest");
const app = require ("../app")

const mockFile = "text.txt"

describe("h0 route tests", () => {

    it("Returns a status 0f 200 if we attach a file", async () => {
        const res = await request(app).post("/0")
        .send({file: mockFile});
        return expect(res.status).toBe(200)
        });

    it("Returns an attachment that matches our mockFile", async () => {
        const res = await request(app).post("/0")
        .send({file: mockFile});
        return expect(res.header["content-disposition"]).toBe(`attachment; filename=\"${mockFile}\"`)
        });

})
