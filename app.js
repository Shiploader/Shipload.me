const Express = require('express');
var app = Express();

app.use(Express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/_views/index.html");
});

app.listen("1277");