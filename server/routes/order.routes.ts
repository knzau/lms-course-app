import express from "express";
import { isAuthenticated, authorizeRoles } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);
orderRouter.get("/get-all-orders", isAuthenticated, authorizeRoles("admin"), getAllOrders);

export default orderRouter;
