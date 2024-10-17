const http = require("http");
const url = process.argv[2];

http.get(url, (response) => {
  let ans = "";
  response.setEncoding("utf8");

  response.on("data", (chunk) => {
    ans += chunk;
  });

  response.on("end", () => {
    console.log(ans.length);
    console.log(ans);
  });

  response.on("error", console.error);
});
