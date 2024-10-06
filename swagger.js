const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Opciones para swagger-jsdoc
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de Reservas",
      version: "1.0.0",
      description: "Documentación de la API de Reservas",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes.js"],
};

const specs = swaggerJsdoc(swaggerOptions);

module.exports = {
  swaggerUi,
  specs,
};