const fs = require("fs");
const path = require("path");
const folder = process.argv[2];
const extension = "." + process.argv[3];

fs.readdir(folder, (err, files) => {
  if (err) {
    return console.error(err);
  } else {
    const filteredFiles = files.filter(
      (file) => path.extname(file) === extension
    );
    filteredFiles.forEach((file) => console.log(file));
  }
});
