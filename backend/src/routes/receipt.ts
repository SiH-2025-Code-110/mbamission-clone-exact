import { Router } from "express";
import { receiptController } from "../controllers/receipt/receipt.controller";

const router = Router();

router.post("/", receiptController);

export default router;
