import express from "express";
import loginRoutes from "./routes/login.routes.js";
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();
app.get("/", (req, res) => {
  res.status(200).end();
});
app.use(express.json());
app.use("/login", loginRoutes);
app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});
app.listen(process.env.PORT || 3000, () => console.log("API Started"));
