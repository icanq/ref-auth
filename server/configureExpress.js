const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { v1 } = require("./routes");
const app = express();

app.use(cors());
app.use(helmet.frameguard({ action: "SAMEORIGIN" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = express.Router()
app.use('/api', apiRouter)
apiRouter.use("/v1", v1)

module.exports = { app };
