
import * as express from "express"; 
import { getOrderDetailsForMongo, getOrderDetailsForPostgres } from "../controllers/orderController"
export const orderRouter = express.Router();

orderRouter.route("/postgres/:categoryId/:productId").get(getOrderDetailsForPostgres);
orderRouter.route("/mongo/:categoryId/:productId").get(getOrderDetailsForMongo);





