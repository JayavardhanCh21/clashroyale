const path = require("path");
const fs = require("fs");
const http = require("http");
const { MongoClient } = require("mongodb");

const getFileContentType = (filePath) => {
  const extName = path.extname(filePath);
  const contentTypeObj = {
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".html": "text/html",
    ".png": "image/png",
    ".pdf": "application/pdf",
    ".jpg": "image/jpeg",
  };
  return contentTypeObj[extName] || "text/plain";
};

const renderErrorPage = (res) => {
  fs.readFile(path.join(__dirname, "public", "404.html"), (error, data) => {
    if (error) {
      console.log("Something went wrong when rendering the error page");
      console.error(error);
    } else {
      res.writeHead(200, "Success", { "content-type": "text/html" });
      res.write(data, "utf-8");
      res.end();
    }
  });
};

async function main() {
  const username = "vardhan_21";
  const password = "Qwerty1!";
  const uri = `mongodb+srv://vardhan_21:Qwerty1!@cluster0.7thkaz6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log(" connection happened here");
    const data = await fetchTrainDetails(client);
    return data;
  } catch (e) {
    console.log("Something went wrong while connecting to the database");
    console.error(e);
  } finally {
    await client.close();
    console.log("We closed the connection ");
  }
}

main();

async function fetchTrainDetails(client) {
  try {
    const cursor = client.db("clashroyale").collection("cards").find({});
    const results = await cursor.toArray();
    //const js= (JSON.stringify(results));
    //console.log(js);
    return JSON.stringify(results);
  } catch (error) {
    console.log("Something went wrong when fetching the data");
    console.error(error);
  }
}

const server = http.createServer(async (req, res) => {
  if (req.url === "/api") {
    const content = main();
    content.then((trainDetails) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );
      res.writeHead(200, { "content-type": "application/json" });
      res.end(trainDetails);
    });
  } else {
    let filePath = path.join(
      __dirname,
      "public",
      req.url === "/" ? "index.html" : req.url
    );
    fs.readFile(filePath, (error, data) => {
      if (error) {
        if ((error.code = "ENOENT")) {
          renderErrorPage(res);
        }
      } else {
        const contType = getFileContentType(filePath);
        res.writeHead(200, "Success", { "content-type": contType });
        res.write(data, "utf-8");
        res.end();
      }
    });
  }
});

const PORT = process.env.PORT || 3586;

server.listen(PORT, () =>
  console.log(`Great our server is running on port ${PORT} `)
);
