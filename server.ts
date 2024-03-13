import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { orderRouter } from "./routes/orderRoutes";

dotenv.config();

export const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/order",orderRouter);

 app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

