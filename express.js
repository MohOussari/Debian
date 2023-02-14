

const express = require('express');
const childProcess = require('child_process');
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Press here to: <a href="/execute">Create Directory</a> </h1>`)
})

app.get('/execute', (req, res) => {
    const command = 'node index.js';
    childProcess.exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(stdout);
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

