// Import node-cups functions
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

// GUIDE 
// type JobQueue = Array<{
//   id: string;
//   printerName: string;
//   user: string;
//   size: string;
//   date: string;
// }>

// type QueueOptions = {
//   printers?: string[];
// }

// type PrinterOptions = {
//   name: string;
//   values: string[];
//   defaultValue?: string;
// }

// type PrintParams = {
//   printer?: string;
//   copies?: number;
//   priority?: number;
//   pages?: string;
//   fitToPage?: boolean;
//   printerOptions: Record<string, string>;
// }

// type PrintResult = {
//   stdout: string;
//   requestId?: string;
// }



console.log("Printing...")

console.log(await getPrinterNames());
const file = "./testpage.pdf" 
const params = {
  printerOptions: {
    media:"Letter"
  }
}
const result = await printFile(file,params);
console.log(result);

while (true){
    console.log(await getNotCompletedQueue());
}