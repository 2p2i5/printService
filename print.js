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


async function handleIt(event) {
    alert(event.target.field.value);
    const file = "./testpage.pdf" 
    const params = {
        printerOptions: {
            media:"Letter"
        }
    }
    const result = await printFile(file,params);

    alert(result);
}