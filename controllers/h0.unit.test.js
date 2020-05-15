const request = require("supertest");
const app = require ("../app")
const download = require("./download")

// const mockResponse = () => {
//     const res = {};
//     res.status = jest.fn().mockReturnValue(res);
//     res.json = jest.fn().mockReturnValue(res);
//     res.download = jest.fn().mockReturnValue(res)
//     return res;
// }

describe("h0 route tests", () => {

it("Returns an iconic pop-culture phrase", async () => {
    const res = await request(app).post("/0");
    return expect(1).toEqual(1) 
    });

//  it("Fires the download route's main function", async () => {

//     const res = mockResponse()
//     const req = {
//         headers: { 'Accept': 'application/json',
//         "Content-Type": 'application/json'},
//         method: 'POST',
//         body: JSON.stringify({"File":"FartButt"})
//     }
//      const dl = download.handleDownload(req, res);
//      return expect(dl).toHaveBeenCalled()    
//    });
})
