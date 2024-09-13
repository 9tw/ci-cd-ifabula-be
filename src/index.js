import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "GET request from iFabula test app",
  });
});

app.post("/", (req, res) => {
  res.status(201).json({
    message: "POST request from iFabula test app",
  });
});

app.put("/", (req, res) => {
  res.status(201).json({
    message: "PUT request from iFabula test app",
  });
});

app.delete("/", (req, res) => {
  res.status(202).json({
    message: "DELETE request from iFabula test app",
  });
});

app.listen(port, () => {
  console.log(`iFabula test app started on port ${port}`);
});
