import express from "express";
import loginRoutes from "./routes/login.routes.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).end();
});

app.use(express.json());

app.use("/login", loginRoutes);

app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});
const port = process.env.PORT
app.listen(port || 3000, () => console.log("API Started"));
