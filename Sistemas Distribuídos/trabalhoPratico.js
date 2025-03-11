const express = require("express");

const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { login, senha } = req.body;

  if (!login || !senha) {
    return res.status(400).json({
      erro: "Login e/ou senha devem ser preenchidos!",
    });
  }

  res.json({ login, senha });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando!`);
});
