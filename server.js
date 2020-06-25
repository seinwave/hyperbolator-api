const app = require("./app")


const PORT = PROCESS.ENV.PORT || 3001 
app.listen(PORT, () => {
    console.log(`Live and listening on port ${PORT}`)
})