const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require("./config/database.js");
const port = 5000;

app.set("port", process.env.PORT || port);
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync(); //verifica a base de dados

app.use("/api/v1", require("./routes/cliente.route.js"));
app.use("/api/v1", require("./routes/vendedor.route.js"));
app.use("/api/v1", require("./routes/imovel.route.js"));
app.use("/api/v1", require("./routes/transacao.route.js"));
app.use("/api/v1", require("./routes/favorito.route.js"));
app.use("/api/v1", require("./routes/auth.route"));
app.use("/api/v1", require("./routes/user.route"));

app.listen(app.get("port"), () => {
    console.log("Servidor a correr na porta "+app.get("port"));
});