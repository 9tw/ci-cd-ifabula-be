import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "GET request",
  });
});

app.post("/", (req, res) => {
  res.status(201).json({
    message: "POST request",
  });
});

app.put("/", (req, res) => {
  res.status(201).json({
    message: "PUT request",
  });
});

app.delete("/", (req, res) => {
  res.status(202).json({
    message: "DELETE request",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
