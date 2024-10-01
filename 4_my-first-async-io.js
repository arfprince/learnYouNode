const fs = require('fs');
const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, fileContent) => {
    if (err) {
        return console.error(err);
    }
    const numberOfNewlines = fileContent.split('\n').length - 1;
    console.log(numberOfNewlines);
});
