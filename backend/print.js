import {
    getCompletedQueue,
    getNotCompletedQueue,
    getPrinterNames,
    getPrinterOptions,
    getAllPrinterOptions,
    printBuffer,
    printFile,
    cancelAllJobs,
    cancelJob,
} from "node-cups";

//import * as http from 'http';


async function testPrint() {
    const file = "./testpage.pdf" 
    const params = {
        printerOptions: {
            media:"Letter"
        }
    }
    const result = await printFile(file,params);
}

// const requestHandler = (req, res) => {
//   console.log(`Received ${req.method} request for ${req.url}`);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Request processed successfully');
// };

// const server = http.createServer(requestHandler);

// server.listen(3000, () => {
//   console.log('Server is running on localhost:3000');
// });

import express from 'express';
import cors from 'cors';
var app = express();

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})