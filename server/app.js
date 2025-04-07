const express = require("express");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const data = JSON.parse(fs.readFileSync("./products.json", "utf-8"));
const descriptionsData = JSON.parse(
  fs.readFileSync("./productsDescription.json", "utf-8")
);

app.get("/api/items", async (request, response) => {
  const { q } = request.query;

  if (!q) {
    return response
      .status(400)
      .json({ error: "Se requiere un parámetro de búsqueda" });
  }
  try {
    const results = data.items.filter((item) =>
      item.title.toLowerCase().includes(q.toLowerCase())
    );
    const res = {
      author: {
        name: data.author.name,
        lastname: data.author.lastname,
      },
      categories: data.categories,
      items: results,
    };

    response.json(res);
  } catch (error) {
    console.error("Error en api/items: ", error);
    response.status(500).json({ error: "Error interno del servidor api1" });
  }
});

app.get("/api/items/:id", async (request, response) => {
  const { id } = request.params;

  if (!id) {
    return response
      .status(400)
      .json({ error: "Se requiere un parámetro de búsqueda" });
  }
  const product = data.items.find((item) => item.id === id);
  const description = descriptionsData.items.find((item) => item.id === id);

  try {
    const res = {
      author: {
        name: data.author.name,
        lastname: data.author.lastname,
      },
      item: {
        ...product,
        ...(description || {}),
      },
    };
    response.json(res);
  } catch (error) {
    console.error("Error en api/items:id ", error);
    response.status(500).json({ error: "Error interno del servidor api2" });
  }
});
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
