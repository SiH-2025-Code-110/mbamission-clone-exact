import PDFDocument from "pdfkit";
import { ReceiptPayload } from "../../models/receipt/receipt.model";

const toCurrency = (value: number): string => {
  return value.toFixed(2);
};

export const generateReceiptPdf = async (data: ReceiptPayload): Promise<Buffer> => {
  return await new Promise<Buffer>((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 50 });
    const chunks: Buffer[] = [];

    doc.on("data", (chunk) => {
      chunks.push(chunk as Buffer);
    });

    doc.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    doc.on("error", (error) => {
      reject(error);
    });

    const colors = {
      black: "#000000",
      white: "#ffffff",
      darkRed: "#a12227",
      darkBlue: "#1a4665",
      grayBg: "#e6e6e6",
      textGray: "#666666",
      borderColor: "#333333",
    };

    // --- Header ---
    doc.font("Helvetica").fontSize(26).fillColor(colors.black).text("Beyond", 50, 50, { continued: true });
    doc.font("Helvetica-Bold").fillColor(colors.darkRed).text("Bridge.");

    doc.font("Helvetica-Bold").fontSize(20).fillColor(colors.darkBlue).text(data.title, 50, 55, { align: "right" });

    // Separator Line
    doc.moveTo(50, 85).lineTo(545, 85).lineWidth(2).strokeColor(colors.darkBlue).stroke();

    // --- Billing Info ---
    const topInfoY = 110;
    doc.fillColor(colors.black);
    doc.font("Helvetica-Bold").fontSize(9).text("Billed To:", 50, topInfoY);
    doc.font("Helvetica-Bold").text(data.billedTo.fullName, 50, topInfoY + 16);
    doc.font("Helvetica").text(data.billedTo.email, 50, topInfoY + 32);
    doc.text(data.billedTo.phone, 50, topInfoY + 44);
    doc.text(data.billedTo.cityState, 50, topInfoY + 56);

    const rightLabelX = 320;
    const rightValueX = rightLabelX + 90;

    doc.font("Helvetica-Bold").text("Receipt No.:", rightLabelX, topInfoY);
    doc.font("Helvetica").text(data.payment.receiptNo, rightValueX, topInfoY);

    doc.font("Helvetica-Bold").text("Date:", rightLabelX, topInfoY + 16);
    doc.font("Helvetica").text(data.payment.date, rightValueX, topInfoY + 16);

    doc.font("Helvetica-Bold").text("Payment Mode:", rightLabelX, topInfoY + 32);
    doc.font("Helvetica").text(data.payment.paymentMode, rightValueX, topInfoY + 32);

    doc.font("Helvetica-Bold").text("Transaction ID:", rightLabelX, topInfoY + 48);
    doc.font("Helvetica").text(data.payment.transactionId, rightValueX, topInfoY + 48);

    // --- Table ---
    const tableTop = 200;
    const col1 = 50;  // Service Description Start
    const col2 = 280; // Qty Start
    const col3 = 340; // Rate Start
    const col4 = 430; // Amount Start
    const col5 = 545; // Right Edge

    // Table Header Rect
    doc.rect(col1, tableTop, col5 - col1, 25).fill(colors.darkRed);

    // Table Header Text
    doc.fillColor(colors.white).font("Helvetica-Bold").fontSize(9);
    doc.text("Service Description", col1, tableTop + 8, { width: col2 - col1, align: "center" });
    doc.text("Qty", col2, tableTop + 8, { width: col3 - col2, align: "center" });
    doc.text("Rate", col3, tableTop + 8, { width: col4 - col3, align: "center" });
    doc.text("Amount", col4, tableTop + 8, { width: col5 - col4, align: "center" });

    // Stroke the header rect so grid is contiguous
    doc.rect(col1, tableTop, col2 - col1, 25).strokeColor(colors.borderColor).lineWidth(1).stroke();
    doc.rect(col2, tableTop, col3 - col2, 25).stroke();
    doc.rect(col3, tableTop, col4 - col3, 25).stroke();
    doc.rect(col4, tableTop, col5 - col4, 25).stroke();

    // Table Rows
    let currentY = tableTop + 25;
    doc.fillColor(colors.black).font("Helvetica").fontSize(9);

    // Ensure at least 3 rows to match the visual grid design in image
    const rowsCount = Math.max(3, data.items.length);
    for (let i = 0; i < rowsCount; i++) {
      const item = data.items[i];
      const rowHeight = 25;

      if (item) {
        doc.text(item.serviceDescription, col1 + 5, currentY + 8, { width: col2 - col1 - 10, align: "left" });
        doc.text(String(item.qty), col2, currentY + 8, { width: col3 - col2, align: "center" });
        doc.text(toCurrency(item.rate), col3, currentY + 8, { width: col4 - col3, align: "center" });
        doc.text(toCurrency(item.amount), col4, currentY + 8, { width: col5 - col4, align: "center" });
      }

      // Draw cell borders
      doc.rect(col1, currentY, col2 - col1, rowHeight).stroke();
      doc.rect(col2, currentY, col3 - col2, rowHeight).stroke();
      doc.rect(col3, currentY, col4 - col3, rowHeight).stroke();
      doc.rect(col4, currentY, col5 - col4, rowHeight).stroke();

      currentY += rowHeight;
    }

    // --- Subtotal & GST boxes ---
    const totalBoxX = col4; 
    const totalBoxW = col5 - col4;
    const labelX = col2;
    const labelW = col4 - col2 - 10;
    
    currentY += 15; // gap below table

    // Subtotal
    doc.rect(totalBoxX, currentY, totalBoxW, 25).stroke();
    doc.font("Helvetica").text("Subtotal", labelX, currentY + 8, { width: labelW, align: "right" });
    doc.text(toCurrency(data.totals.subtotal), totalBoxX, currentY + 8, { width: totalBoxW - 10, align: "right" });
    currentY += 25;

    // GST
    doc.rect(totalBoxX, currentY, totalBoxW, 25).stroke();
    doc.font("Helvetica").text(`GST @ ${data.totals.gstPercent}%`, labelX, currentY + 8, { width: labelW, align: "right" });
    doc.text(toCurrency(data.totals.gstAmount), totalBoxX, currentY + 8, { width: totalBoxW - 10, align: "right" });
    currentY += 25;

    // --- Total Paid ---
    doc.rect(col1, currentY, 495, 30).fillAndStroke(colors.darkRed, colors.darkRed);
    doc.fillColor(colors.white).font("Helvetica-Bold").fontSize(11);
    
    // Total Paid LABEL right aligned to center minus offset
    doc.text("Total Paid", col1+160, currentY + 10, { width: col4 - col1, align: "center" });

    // Total Paid VALUE right aligned fully against the total boxes edge  
    doc.text(toCurrency(data.totals.totalPaid), totalBoxX, currentY + 10, { width: totalBoxW - 10, align: "right" });

    currentY += 50;

    // --- Payment Received Message ---
    doc.rect(col1, currentY, 495, 30).fillAndStroke(colors.darkBlue, colors.darkBlue);
    doc.fillColor(colors.white).font("Helvetica-Bold").fontSize(12);
    doc.text(data.paymentMessage, col1, currentY + 10, { width: 495, align: "center" });
    currentY += 45;

    // --- Notes Block ---
    doc.rect(col1, currentY, 495, 60).fillAndStroke(colors.grayBg, colors.grayBg);
    doc.fillColor(colors.black).font("Helvetica-Bold").fontSize(10);
    doc.text("Notes", col1 + 10, currentY + 10);
    doc.font("Helvetica-Oblique").fontSize(9);
    doc.text(data.notes, col1 + 10, currentY + 25, { width: 475, lineGap: 3 });

    // --- Footer ---
    const footerY = 730;
    doc.moveTo(50, footerY - 10).lineTo(545, footerY - 10).lineWidth(1).strokeColor(colors.textGray).stroke();
    doc.fillColor(colors.textGray);
    
    doc.font("Helvetica-Bold").fontSize(9);
    doc.text(data.business.name, 50, footerY);

    doc.font("Helvetica-Bold").text(`GST No.: ${data.business.gstNo}`, 50, footerY, { align: "right", width: 495 });
    doc.font("Helvetica-Oblique").text(data.footerMessage, 50, footerY + 15, { align: "right", width: 495 });

    doc.end();
  });
};
