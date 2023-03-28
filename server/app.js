const express = require("express");
const path = require("path");
const middleware = express.static(path.join(__dirname, './../public'));
const app = express();
app.use(middleware);


// if backend have call back, response generate random number. generate random number write to json
app.get("/url", (req, res, next) => {
    let random = Math.floor(Math.random() * 5) + 1;
    res.status(200).json({ result: random });
    console.log(random);
});


// app.get('*', function (request, response) {
//     response.sendFile(path.resolve(__dirname, './../public', 'index.html'));
// });


// create server port 3000
const port = process.env.PORT || 3000;
app.listen(port, (error) => {

    if (error) {
        console.log('[ERROR] Error start server. \r\n' + error);
        return;
    }
    if (process.env.NODE_ENV === 'production') {
        console.log('[INFO] Server start listening on ' + process.env.HOST_PROD);
    } else {
        console.log('[INFO] Server start listening on localhost:' + port);
    }
    console.log('[INFO] Node environment: ' + process.env.NODE_ENV);
});