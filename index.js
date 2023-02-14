const fs = require('fs');
const path = require('path');

fs.mkdir(`${process.cwd()}/myFolder`, { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Folder created succesfully')

})