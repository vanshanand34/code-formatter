import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
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
    // console.log("inside rfc")
    try {
        const commandText = `npx dprint fmt  ${fileName}`;
        const output = execSync(commandText);
        exec(commandText, (error) => {
            if(error){
                return false;
            }
        });
        // console.log("output : ", output.toString());
    } catch (error) {
        console.log("Error in formatting : ", error.stderr?.toString() || error.message);
    }

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
    if (!fileType || !["py", "html", "css", "js", "jsx", "tsx", "ts"].includes(fileType)) {
        return response.status(400).send("Invalid file type");
    }
    const fileName = 'codeFiles/custom.' + fileType;
    const filePath = path.join(process.cwd(), fileName);

    writeDataToFile(request.body, filePath);
    try{
        const commandText = `npx dprint fmt  ${fileName}`;
        // const output = execSync(commandText);
        exec(commandText, (error) => {
            if(error){
                return response.status(400).json({"error": "Formatting Error", "message": error.message});
            }
            const formattedCode = fs.readFileSync(fileName, { encoding: 'utf-8' });
            console.log("returning formatted code");
            return response.json({formattedCode});
        });
    }catch(error){
        return response.status(400).send(error.message);
    }
    
    // runFormattingCmd(fileName);
    // setTimeout(() => {
    //     addFileContentToResponse(response, filePath);
    // }, 5000);
    return response;
})