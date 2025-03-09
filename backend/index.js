import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { PORT } from "./config.js";


const app = express();

app.use(express.text());

app.use(cors()); // Use this after the variable declaration

// Function to read the contents of a file
function addFileContentToResponse(response, filePath) {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
        if (!err) {
            console.log("Reading file content: ");
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(data);
            response.end();
        } else {
            console.error(err);
        }
    })
}

function writeDataToFile(data, filePath) {
    console.log(filePath);
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("data written successfully")
        }
    })
}

function runFormattingCmd(fileName) {
    const commandText = `npx dprint fmt  ${fileName}`;
    const output = execSync(commandText, (err, stdout, stderr) => {
        console.log(err, stdout, stderr);
    });
}


app.listen(PORT, () => {
    console.log(`App is listening at port number ${PORT}`)
})


// Route to receive file contents and return the file's content formatted
app.get('/fileContent', (request, response) => {
    runFormattingCmd(fileName);
    setTimeout(() => {
        addFileContentToResponse(response, filePath);
        return response;
    }, 5000);
})



// Route to receive file contents and return the file's content formatted
app.post('/fileContent', (request, response) => {

    const fileType = request.headers.filetype;
    if (!fileType || !fileType in ["py", "html", "css", "js", "jsx", "tsx", "ts"]) {
        return response.status(400).send("Invalid file type");
    }
    const fileName = 'codeFiles/custom.' + fileType;
    const filePath = path.join(process.cwd(), fileName);

    writeDataToFile(request.body, filePath);
    runFormattingCmd(fileName);
    addFileContentToResponse(response, filePath);
    return response;
})