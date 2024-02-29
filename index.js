const jsonServer = require("json-server");

const app = jsonServer.create();

const middleWare = jsonServer.defaults();

const router = jsonServer.router("db.json");

const PORT = 3000 | process.env.PORT;

app.use(middleWare);
app.use(router);

app.listen(PORT, () => console.log("Server is running at", PORT));
