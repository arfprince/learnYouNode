const myModule = require("./myModule");
const dir = process.argv[2];
const ext = process.argv[3];

myModule(dir, ext, (err, files) => {
  if (err) {
    return console.error(err);
  }
  files.forEach((file) => console.log(file));
});
