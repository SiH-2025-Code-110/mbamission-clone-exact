import { Request, Response } from "express";
import { toReceiptPayload } from "../../models/receipt/receipt.model";
import { generateReceiptPdf } from "../../services/receipt/receipt.service";

export const receiptController = async (req: Request, res: Response): Promise<void> => {
  const payload = toReceiptPayload(req.body);
  const pdfBuffer = await generateReceiptPdf(payload);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'inline; filename="receipt.pdf"');
  res.status(200).send(pdfBuffer);
};
