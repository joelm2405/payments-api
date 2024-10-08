const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const routes = require('./routes');
const { swaggerUi, specs } = require("./swagger");

app.use(express.json());

app.use('/', routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});