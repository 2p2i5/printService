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

async function testPrint() {
    const file = "./testpage.pdf" 
    const params = {
        printerOptions: {
            media:"Letter"
        }
    }
    const result = await printFile(file,params);
}

const http = require('http');

const requestHandler = (req, res) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Request processed successfully');
};

const server = http.createServer(requestHandler);

server.listen(3000, () => {
  console.log('Server is running on localhost:3000');
});